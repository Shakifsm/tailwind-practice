import React from 'react';
import imgOne from "../../images/egg.jpg"
import imgTwo from "../../images/egg-2.jpg"


const Content = () => {
    return (
        <>
        <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-20">
            <img src={imgOne} alt="" className="h-full rounded md-20 shadow" />
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl mb-2">Egg Muffins</h2>
                <p className="mb-2">Crispy, delicious, and nutritious</p>
                <span>$16</span>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-20">
            <img src={imgTwo} alt="" className="h-full rounded md-20 shadow" />
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl mb-2">Egg Salad</h2>
                <p className="mb-2">Crispy, delicious, and nutritious</p>
                <span>$18</span>
            </div>
        </div>
        </>
    );
};

export default Content;