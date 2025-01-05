import React from 'react';

const Education = () => {
    return (
 <section name='education' className="bg-white py-12 md:py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-info">Educational Qualification</h2>
      <p className="text-lg text-secondary mt-2 max-w-xl mx-auto">My academic journey and achievements that shaped me into a passionate learner and professional.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* Bishnupur Siksha Sangha */}
      <div className="bg-white rounded-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <div className="bg-info text-white py-4 px-6">
          <h3 className="text-2xl font-semibold">Bishnupur Siksha Sangha</h3>
          <p className="text-md font-light mt-1 text-white">West Bengal Board of Secondary Education (WBBSE)</p>
        </div>
        <div className="p-6">
          <p className="text-sm text-primary font-semibold">2011-2016</p>
          <p className="mt-4 text-secondary text-base">Completed my secondary schooling with a solid foundation in diverse subjects, which set the stage for further education.</p>
        </div>
      </div>

      {/*  WBCHSE */}
      <div className="bg-white rounded-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <div className="bg-info text-white py-4 px-6">
          <h3 className="text-2xl font-semibold">Bishnupur Siksha Sangha</h3>
          <p className="text-md font-light mt-1 text-white">West Bengal Council of Higher Secondary Education (WBCHSE)</p>
        </div>
        <div className="p-6">
          <p className="text-sm text-primary font-semibold">2016-2018</p>
          <p className="mt-4 text-secondary text-base">Successfully completed my Higher Secondary Education, diving deeper into specialized subjects that helped refine my interests and career direction.</p>
        </div>
      </div>

      {/* Vidyanagar College */}
      <div className="bg-white rounded-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <div className="bg-info h-[120px] text-white py-4 px-6">
          <h3 className="text-2xl font-semibold">Vidyanagar College</h3>
          <p className="text-md font-light mt-1 text-white">University of Calcutta</p>
        </div>
        <div className="p-6">
          <p className="text-sm text-primary font-semibold">2018-2021</p>
          <p className="mt-4 text-secondary text-base">Graduated with a Bachelor of Commerce degree. My academic focus was on business management, economics, and accounting.</p>
        </div>
      </div>
    </div>
  </div>
</section> 

// {/* <section className="bg-gradient-to-r from-blue-50 to-indigo-200 py-16 md:py-28">
//   <div className="container mx-auto px-6">
//     <div className="text-center mb-10">
//       <h2 className="text-4xl font-bold text-primary mb-4">Educational Qualifications</h2>
//       <p className="text-lg text-gray-600">My academic journey and achievements that shaped me into a passionate learner and professional.</p>
//     </div>
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
      
//       {/* Education Item 1: Bishnupur Siksha Sangha */}
//       <div className="bg-white shadow-lg rounded-xl transform hover:scale-105 transition-all duration-300">
//         <div className="bg-blue-600 text-white rounded-t-xl p-6">
//           <h3 className="text-2xl font-semibold">Bishnupur Siksha Sangha</h3>
//           <p className="text-lg font-light">West Bengal Board of Secondary Education (WBBSE)</p>
//         </div>
//         <div className="p-6">
//           <p className="text-sm text-primary">2011 - 2016</p>
//           <p className="mt-4 text-secondary">Completed Secondary Education with a focus on diverse subjects, laying the foundation for further education.</p>
//         </div>
//       </div>

//       {/* Education Item 2: WBCHSE */}
//       <div className="bg-white shadow-lg rounded-xl transform hover:scale-105 transition-all duration-300">
//         <div className="bg-green-500 text-white rounded-t-xl p-6">
//           <h3 className="text-2xl font-semibold">Bishnupur Siksha Sangha</h3>
//           <p className="text-lg font-light">West Bengal Council of Higher Secondary Education (WBCHSE)</p>
//         </div>
//         <div className="p-6">
//           <p className="text-sm text-primary">2016 - 2018</p>
//           <p className="mt-4 text-secondary">Successfully completed Higher Secondary Education, specializing in subjects that helped build my academic skills and career direction.</p>
//         </div>
//       </div>

//       {/* Education Item 3: Vidyanagar College */}
//       <div className="bg-white shadow-lg rounded-xl transform hover:scale-105 transition-all duration-300">
//         <div className="bg-indigo-700 text-white rounded-t-xl p-6">
//           <h3 className="text-2xl font-semibold">Vidyanagar College</h3>
//           <p className="text-lg font-light">University of Calcutta</p>
//         </div>
//         <div className="p-6">
//           <p className="text-sm text-primary">2018 - 2021</p>
//           <p className="mt-4 text-secondary">Graduated with a Bachelor of Commerce degree, focusing on business management, economics, and accounting.</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </section> */}

    );
};

export default Education;