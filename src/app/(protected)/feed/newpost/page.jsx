'use client'
import { createPost } from '@/lib/actions/post.action';
import { getUserIdByToken } from '@/lib/actions/user.action';
import { uploadImage } from '@/lib/utils/upload.picture';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'

function page() {
  const [images, setImages] = useState([]);
  const [user, setUserId] = useState('')
  const router = useRouter()
  useEffect(() => {
    const getId = async () => {
      try {
        const res = await getUserIdByToken();
        setUserId(res.id)
      } catch (error) {
        console.log(error);
      }
    }
    getId();
  }, [])
  const [postData, setPostData] = useState({
    userId: '',
    post: {
      caption: '',
      location: '',
      image: '',
      imageId: ''
    }
  })
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files).map(file => ({
      url: URL.createObjectURL(file),
      name: file.name,
      preview: ['jpg', 'jpeg', 'png', 'gif'].includes(file.name.split('.').pop().toLowerCase()),
      size: file.size > 1024 ? file.size > 1048576 ? Math.round(file.size / 1048576) + 'mb' : Math.round(file.size / 1024) + 'kb' : file.size + 'b'
    }));
    setImages(files);
  };

  async function imageToBase64(imageUrl) {
    var img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = imageUrl;

    return new Promise((resolve, reject) => {
      img.onload = function () {
        var canvas = document.createElement('canvas');
        canvas.width = this.width;
        canvas.height = this.height;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(this, 0, 0);
        var dataURL = canvas.toDataURL('image/jpeg');
        var base64String = dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
        resolve(base64String);
      };

      img.onerror = function () {
        reject(new Error('Failed to load image'));
      };
    });
  }
  const handdleSubmit = async () => {
    try {
      var imageUrl = images[0].url;
      const base64 = await imageToBase64(imageUrl);
      const res = await uploadImage(base64)
      // console.log(res);
      const response = await createPost({
        userId: user,
        post: {
          caption: postData.post.caption || 'ABC',
          location: postData.post.location,
          image: res.image_url,
          imageId: res.public_id
        }
      });
      if(response.status === 200){
        setImages([])
        setPostData({
          userId: '',
          post: {
            caption: '',
            location: '',
            image: '',
            imageId: ''
          }
        })
        router.push('/feed')
      }
    } catch (error) {
      console.log(error);
    }

  };
  const handleImageRemove = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  return (
    <div className="bg-black shadow p-4 py-8 w-full" x-data={{ images: [] }} >
      <div className="heading text-center font-bold text-2xl m-5  text-white">Create New Post</div>
      <div className="editor mx-auto w-10/12 flex flex-col   p-4 shadow-lg max-w-2xl">
        <textarea 
        className="description sec p-3 h-40 border border-gray-300 outline-none mb-4 bg-black" 
        spellCheck="true" 
        placeholder="Describe everything about this post here"
        onChange={(e) => {
          setPostData({
            ...postData,
            post: {
              ...postData.post,
              caption: e.target.value
            }
          })
        }}
        ></textarea>
        <input
          className="title bg-black border border-gray-300 p-2 mb-4 outline-none"
          spellCheck="false"
          placeholder="Location"
          type="text"
          onChange={
            (e) => {
              setPostData({
                ...postData,
                post: {
                  ...postData.post,
                  location: e.target.value
                }
              })
            }
          }
        />
        <div className="icons flex text-white m-2">
          <label id="select-image">
            <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
            </svg>
            <input hidden type="file" accept=".jpg, .png, .gif, .jpeg" onChange={handleFileChange} />

          </label>
          <div className="count ml-auto text-gray-400 text-xs font-semibold">0/300</div>
        </div>
        <div id="preview" className="my-4 flex">
          {images.map((image, index) => (
            <div key={index} className="relative w-32 h-32 object-cover rounded">
              {image.preview ? (
                <div className="relative w-32 h-32 object-cover rounded">
                  <img src={image.url} className="w-32 h-32 object-cover rounded" alt={image.name} />
                  <button onClick={() => handleImageRemove(index)} className="w-6 h-6 absolute text-center flex items-center top-0 right-0 m-2 text-white text-lg bg-red-500 hover:text-red-700 hover:bg-gray-100 rounded-full p-1"><span className="mx-auto">×</span></button>
                  <div className="text-xs text-center p-2">{image.size}</div>
                </div>
              ) : (
                <div className="relative w-32 h-32 object-cover rounded">
                  <svg className="fill-current w-32 h-32 ml-auto pt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M15 2v5h5v15h-16v-20h11zm1-2h-14v24h20v-18l-6-6z" />
                  </svg>
                  <button onClick={() => handleImageRemove(index)} className="w-6 h-6 absolute text-center flex items-center top-0 right-0 m-2 text-white text-lg bg-red-500 hover:text-red-700 hover:bg-gray-100 rounded-full p-1"><span className="mx-auto">×</span></button>
                  <div className="text-xs text-center p-2">{image.size}</div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="buttons flex justify-end">
          <div className="btn border border-indigo-500 px-5 py-2 font-semibold cursor-pointer text-gray-200 ml-2 bg-[#1d9bf0]  rounded-full" onClick={handdleSubmit}>Post</div>
        </div>
      </div>
    </div>
  );
}

export default page;
