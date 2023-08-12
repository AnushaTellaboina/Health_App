import React from 'react';


const dietImg = "https://res.cloudinary.com/dgusazphc/image/upload/v1691737609/dietbg_c0uxhn.png";

const Diet = () => {
  return (
    <div className='bg-light pb-10'>
<div className="w-full md-height-140 height-120 d-flex flex-column align-items-center justify-content-center" style={{ backgroundImage: `url(${dietImg})`, paddingTop: "150px", paddingBottom: "150px" }}>
    <h1 className="text-white text-4xl">What to put on your plate?</h1>
    <div className="text-center pt-8 px-6 max-width-2xl text-white">
        {/* List of what to put on your plate */}
        You probably know a healthy diet benefits you physically, mentally, and socially. Without good food and drink choices, you're at greater risk of chronic diseases, such as cardiovascular disease, type 2 diabetes, some cancers, and even mental health issues, such as anxiety and depression. A healthy diet helps socially too - regularly connecting with other people may stave off loneliness and isolation.
    </div>
</div>





<div className="container pt-5">
    <h1 className="text-center text-3xl text-success">Example Menu for you</h1>
    <div className="row mt-4">
        <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm border-0">
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                    <h2 className="card-title text-success">Breakfast</h2>
                    <ul className="list-unstyled text-center">
                        <li>Smoothie with spinach, fruit, and yogurt</li>
                        <li>Vegetable omelet with whole-grain toast</li>
                        <li>Avocado breakfast bruschetta</li>
                        <li>Banana split oatmeal</li>
                        <li>Eggs over kale and sweet potato grits</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm border-0">
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                    <h2 className="card-title text-success">Lunch</h2>
                    <ul className="list-unstyled text-center">
                        <li>Chicken, tomato, avocado sandwich on whole-grain bread</li>
                        <li>Quinoa with stir-fried vegetables</li>
                        <li>Apple coleslaw</li>
                        <li>Black bean and sweet potato quesadillas</li>
                        <li>Sanchico tuna salad</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm border-0">
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                    <h2 className="card-title text-success">Dinner</h2>
                    <ul className="list-unstyled text-center">
                        <li>Chicken breast, roasted vegetables, hummus</li>
                        <li>Roasted salmon, zucchini, and sweet potato</li>
                        <li>Whole-wheat pasta, ground turkey, and tomato sauce</li>
                        <li>Argentinean grilled steak with salsa criolla</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm border-0">
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                    <h2 className="card-title text-success">Snack</h2>
                    <ul className="list-unstyled text-center">
                        <li>Baby carrots and hummus</li>
                        <li>Celery with natural peanut butter</li>
                        <li>Fruit and yogurt</li>
                        <li>Banana cocoa yogurt pops</li>
                        <li>Chili popcorn</li>
                        <li>Yummy bean dip</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>



<div className="container pt-5">
    <div className="text-center">
        <h1 className="text-3xl text-success pt-5 pb-3">Remember Sunita...</h1>
        <ul className="px-3 px-md-5 mt-2 text-gray-800 list-unstyled">
            <li>As you become older, the foods and drinks that make up a healthy diet for you may be slightly different from when you were younger.</li>
            <li>Know serving sizes and amounts for your age.</li>
            <li>If you need help choosing or preparing a healthy diet, chat to a family member, your healthcare professional, carer, or an accredited practising dietitian.</li>
            <li>Talk to your doctor about your specific health needs.</li>
        </ul>
    </div>
</div>
</div>
  )
}

export default Diet