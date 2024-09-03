import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        < div>
            <h2 className='bg-pink-200 m-4 flex flex-col  text-green-800 fixed right-0'>
                    Welcome To Dice
            </h2>
            <div className='p-10'></div>
            <div className='m-4 w-auto flex justify-center mt-3'>
            <img src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="Cant fetch data" className='mt-5'/>
            </div>
        </div>
    );
}