import React from 'react';

const mountain = "https://res.cloudinary.com/dgusazphc/image/upload/v1691736377/mountain_ix0wfh.jpg";
const oldLady= "https://res.cloudinary.com/dgusazphc/image/upload/v1691735847/old-lady_vz1e0v.jpg";



const Hero = () => {
    return (
        <div>
            {/* Background section */}
            <div className='position-relative bg-light'>
                {/* Background image */}
                <div class="bg-nature" style={{ backgroundImage: `url(${mountain})`, paddingTop: "100px", paddingBottom: "100px" }}>
                    <div class="container d-flex flex-column align-items-center px-4 py-16 pb-24 mx-auto text-center lg-pb-56 md-py-32 md-px-10 lg-px-32">
                        <h1 class="text-4xl font-weight-bold d-inline-block sm-text-6xl xl-max-w-3xl text-success">Hey Sunita! Let's enjoy life to its fullest!</h1>
                        <p class="mt-6 mb-8 text-md sm-mb-12 xl-max-w-2xl text-secondary">Here's a mantra for you to stay healthy and happy. Start with some light exercise and yoga, follow your diet, and enjoy music and movies.</p>
                    </div>
                </div>

                    {/* Content container */}
           
                {/* Image section */}
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8 mx-auto">
                            {/* Positioned image */}
                   
                            <img src={oldLady} alt="" className="img-fluid w-5/6 mx-auto mb-12 mt-n5 rounded-3xl shadow-lg lg-mt-n10" style={{ backgroundColor: "#1a202c" }} />



                                {/* Positioned content */}
                            
                       
                        </div>
                    </div>
                </div>
                {/* Tips section */}
                <div className="py-4 px-4 mt-5 bg-light text-center">
                    <div className='max-w-4xl px-4'>
                        <h1 className='text-center text-3xl py-4 font-weight-bold text-gray-700'>
                            <span className='text-green-600'>HealthApp</span> is your guide to Stay Healthy and Happy 😊
                        </h1>
                        <p className='text-gray-700'>
                            No matter your age, it's important to take care of your body and prevent illness.
                        </p>
                        {/* Tips list */}
                        <ul className='list-unstyled text-gray-700'>
                            <li className='mb-2'><span className='text-green-600'>Get active:</span> Engage in regular physical activity.</li>
                            <li className='mb-2'><span className='text-green-600'>Take supplements as necessary:</span> Consult a healthcare provider.</li>
                            <li className='mb-2'><span className='text-green-600'>Eat a healthy diet:</span> Include fruits, vegetables, and whole grains.</li>
                            <li className='mb-2'><span className='text-green-600'>Wash your hands frequently:</span> Proper hand hygiene.</li>
                            <li className='mb-2'><span className='text-green-600'>Learn how to manage stress:</span> Practice relaxation techniques.</li>
                            <li className='mb-2'><span className='text-green-600'>Get plenty of rest:</span> Prioritize sleep.</li>
                            <li className='mb-2'><span className='text-green-600'>Take steps to prevent infections:</span> Maintain hygiene and vaccination.</li>
                            <li className='mb-2'><span className='text-green-600'>Schedule annual physicals:</span> Regular health check-ups.</li>
                            <li className='mb-2'><span className='text-green-600'>Avoid contact with people who are sick:</span> Limit exposure to illness.</li>
                        </ul>
                    </div>
                    {/* Red separator */}
                    <br className='bg-red-500 h-2' />
                </div>
            </div>
        </div>
    );
}

export default Hero;
