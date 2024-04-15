import Image from 'next/image';
import { useState, useEffect } from 'react';

const ProfileCard = ({ imageUrl, onEdit }) => {
    const [image, setImage] = useState('');

    useEffect(() => {
        if (imageUrl) {
            setImage(imageUrl);
        }
    }, [imageUrl]);

    return (
        <div className="bg-gray-700 p-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
                <div className="relative h-16 w-16">
                    <Image
                        src={image}
                        alt="Profile Image"
                        layout="fill"
                        className="rounded-full object-cover"
                    />
                </div>
                <button 
                    onClick={onEdit} 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Edit
                </button>
            </div>
        </div>
    );
};

export default ProfileCard;