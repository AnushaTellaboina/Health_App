import React from 'react';

const sunitaYoga = "https://res.cloudinary.com/dgusazphc/image/upload/v1691735552/sunitaYoga_vibvge.jpg";

const Yoga = () => {
  return (
    <div className="bg-sky-50">
      <div className="w-full">
        <img className="w-100 img-fluid" src={sunitaYoga} alt="" />
      </div>

      <div className="text-gray-600">
        <div className="container px-5 -mt-16 md:w-4/5 mx-auto">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4">

            {/* Adho Mukha Svanasana - Downward Facing Dog Pose */}
            <div className="col">
              <div className="card h-full shadow-lg border-0">
                <iframe className="card-img-top" src="https://www.youtube.com/embed/8nB9MzY7PkY" title="YouTube video player" allowFullScreen></iframe>
                <div className="card-body">
                  <h1 className="card-title text-lg text-gray-900 mb-1" style={{ fontSize: "1.25rem", padding: "0.5rem 0" }}>Adho Mukha Svanasana - Downward Facing Dog Pose</h1>
                  <p className="card-text mb-3">You will just love this pose. With its innumerable benefits, it can be done by you with utmost ease. However, if you find it difficult to come all the way on your fours with hips pointing to the ceiling, take the help of a table top.</p>
                  <h1 className="card-title text-lg text-gray-900 mb-1" style={{ fontSize: "1.25rem", padding: "0.5rem 0" }}>Benefits:</h1>
                  <p className="card-text">
                    Adho Mukha Svanasana allows blood to flow into the brain, making the mind sharper and less prone to absent-mindedness. This inverted pose also plays a vital role in reducing stress levels.
                  </p>
                </div>
              </div>
            </div>

            {/* Tadasana - Mountain Pose */}
            <div className="col">
              <div className="card h-full shadow-lg border-0">
                <iframe className="w-full h-80 object-contain object-center" src="https://www.youtube.com/embed/drBqFWcLEcE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <div className="p-4" style={{ borderRadius: '0 0 0.5rem 0.5rem', padding: '1rem' }}>
                  <h1 className="text-lg text-gray-900 mb-1" style={{ fontSize: "1.125rem" }}>
                    Tadasana - Mountain Pose
                  </h1>
                  <p className="mb-3" style={{ fontSize: "0.875rem" }}>
                    Tadasana is also known as the 'Mountain Pose'. In Sanskrit 'Tada' means 'Mountain' and 'Asana' means 'Pose.' This is one of the simplest of asanas, which does a good job of correcting your posture. Make sure you breathe as you go through with this pose.
                  </p>
                  <h1 className="text-lg text-gray-900 mb-1" style={{ fontSize: "1.125rem" }}>
                    Benefits:
                  </h1>
                  <p style={{ fontSize: "0.875rem" }}>
                    Mountain pose is a great pose for seniors since it improves their posture. It strengthens their weak thighs and ankles, making it easier for them to move around. It also relieves back pain and aches, which is a common problem in old age.
                  </p>
                </div>
              </div>
            </div>

            {/* Shavasana - Corpse Pose */}
            <div className="col">
              <div className="card h-full shadow-lg border-0">
                <iframe className="w-full h-80 object-contain object-center" src="https://www.youtube.com/embed/zCLO7lODk_c" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <div className="p-4" style={{ borderRadius: '0 0 0.5rem 0.5rem', padding: '1rem' }}>
                  <h1 className="text-lg text-gray-900 mb-1" style={{ fontSize: "1.125rem" }}>
                    Shavasana - Corpse Pose
                  </h1>
                  <p className="mb-3" style={{ fontSize: "0.875rem" }}>
                    Wind up your yoga class with this simple, yet powerful yoga pose. It is not just a relaxation pose, but it allows you to create an awareness about your body and breathing pattern.
                  </p>
                  <h1 className="text-lg text-gray-900 mb-1" style={{ fontSize: "1.125rem" }}>
                    Benefits:
                  </h1>
                  <p style={{ fontSize: "0.875rem" }}>
                    A quick yoga session followed by Shavasana is a good remedy. It improves concentration, enhancing the quality of life for the elderly. Shavasana also cures insomnia, a common chronic problem in old age.
                  </p>
                </div>
              </div>
            </div>

            {/* Bhujangasana - Cobra Pose */}
            <div className="col">
              <div className="card h-full shadow-lg border-0">
                <iframe className="w-full h-80 object-contain object-center" src="https://www.youtube.com/embed/99RR2vRvgi8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <div className="p-4" style={{ borderRadius: '0 0 0.5rem 0.5rem', padding: '1rem' }}>
                  <h1 className="text-lg text-gray-900 mb-1" style={{ fontSize: "1.125rem" }}>
                    Bhujangasana - Cobra Pose
                  </h1>
                  <p className="mb-3" style={{ fontSize: "0.875rem" }}>
                    Give your back and abdominal muscles a good stretch and strengthen them with this Cobra Pose. Make sure you keep your shoulders relaxed and rolled backwards to avoid injuries. You can keep a block beneath the hands if you need additional support.
                  </p>
                  <h1 className="text-lg text-gray-900 mb-1" style={{ fontSize: "1.125rem" }}>
                    Benefits:
                  </h1>
                  <p style={{ fontSize: "0.875rem" }}>
                    Bhujangasana helps seniors fight constipation by stimulating the abdominal organs. It further strengthens the back and legs, opens the heart and lungs, and mobilizes the spine.
                  </p>
                </div>
              </div>
            </div>

            {/* Baddha Konasana - Bound Angle Pose */}
            <div className="col">
              <div className="card h-full shadow-lg border-0">
                <iframe className="w-full h-80 object-contain object-center" src="https://www.youtube.com/embed/fm0jMey-Xys" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <div className="p-4" style={{ borderRadius: '0 0 0.5rem 0.5rem', padding: '1rem' }}>
                  <h1 className="text-lg text-gray-900 mb-1" style={{ fontSize: "1.125rem" }}>
                    Baddha Konasana - Bound Angle Pose
                  </h1>
                  <p className="mb-3" style={{ fontSize: "0.875rem" }}>
                    Take care of your hands, joints, legs, and back with utmost care with Baddha Konasana. This pose targets the areas of your body that are more susceptible to pains and aches. Along with strengthening your lower back, it also soothes menopausal complaints.
                  </p>
                  <h1 className="text-lg text-gray-900 mb-1" style={{ fontSize: "1.125rem" }}>
                    Benefits:
                  </h1>
                  <p style={{ fontSize: "0.875rem" }}>
                    Baddha Konasana is touted for its internal benefits. It stimulates the abdominal organs, improves circulation, soothes sciatica, and helps relieve depression, anxiety, and fatigue.
                  </p>
                </div>
              </div>
            </div>

            {/* Trikonasana - Triangle Pose */}
            <div className="col">
              <div className="card h-full shadow-lg border-0">
                <iframe className="w-full h-80 object-contain object-center" src="https://www.youtube.com/embed/misHjEvOskI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <div className="p-4" style={{ borderRadius: '0 0 0.5rem 0.5rem', padding: '1rem' }}>
                  <h1 className="text-lg text-gray-900 mb-1" style={{ fontSize: "1.125rem" }}>
                    Trikonasana - Triangle Pose
                  </h1>
                  <p className="mb-3" style={{ fontSize: "0.875rem" }}>
                    Trikonasana is also known as the 'Triangle Pose'. In Sanskrit, 'Tri' means 'Three', 'Kona' means 'Angle or Corners', and 'Asana' means 'Posture'.
                  </p>
                  <h1 className="text-lg text-gray-900 mb-1" style={{ fontSize: "1.125rem" }}>
                    Benefits:
                  </h1>
                  <p style={{ fontSize: "0.875rem" }}>
                    Trikonasana reduces blood pressure, a common problem that most elderly people face. It brings stability, strength, and stamina in one’s life. It is also good for strengthening the arms and legs.
                  </p>
                </div>
              </div>
            </div>

            {/* Add more poses similarly */}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yoga;
