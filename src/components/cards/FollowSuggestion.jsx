'use client'
import { useEffect, useState } from 'react'
// Dummy data array
const dummyData = [
    {
        id: 1,
        name: "Vercel",
        username: "@vercel",
        imageUrl: "/next.svg"
    },
    {
        id: 2,
        name: "Example User",
        username: "@exampleuser",
        imageUrl: "/next.svg"
    },
    // Add more dummy data objects as needed
];
const FollowSuggestion = () => {
    const [followSuggestion, setFollowSuggestion] = useState([]);
    const getFollowSuggession = async () => {
        try {
            const response = await fetch('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
            const data = await response.json();
            // setFollowSuggestion(data);
            setFollowSuggestion(dummyData);
        } catch (error) {
            console.log("Error in Followsuggession page", error);
        }
    }
    useEffect(() => {
        getFollowSuggession()

    }, [])

    return (
        <div className="who m-3 bg-[#16181c] w-1/2 py-5 rounded-xl space-y-1">
            <h1 className="text-xl font-bold px-3">Who To Follow</h1>


             {dummyData.map((item) => (
            <div key={item.id} className="item p-3 items-center gap-2 flex justify-between hover:bg-gray-800 cursor-pointer">
                <div className="flex gap-3">
                    <div className="p1"><img className="w-12 h-12" src={item.imageUrl} alt={item.name} /></div>
                    <div className="p2">
                        <div>{item.name}</div>
                        <div className="text-gray-500">{item.username}</div>
                    </div>
                </div>
                <div className="p3">
                    <button className="bg-white text-black px-5 py-2 rounded-full font-bold">Follow</button>
                </div>
            </div>
            ))}
        </div>
    )
}

export default FollowSuggestion
