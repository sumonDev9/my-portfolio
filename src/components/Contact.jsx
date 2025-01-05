import axios from 'axios';
import { GoLocation, GoMail, GoDeviceMobile } from 'react-icons/go';
import Swal from 'sweetalert2';

const Contact = () => {

    const handlesubmit = async e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;
        
        if (!name || !email || !message) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'All fields are required!',
            });
            return;
        }

        const formData = {name, email, message}

        try {
            const { data } = await axios.post('http://localhost:5000/register', formData);
                if(data.messageId){
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Your email has been sent. We will respond soon!',
                });
            }
            console.log(data);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Submission Failed',
                text: error.message || 'Could not send email. Please try again.',
            });
        }
    }
    return (
        <section id='contact' className="bg-white py-5 sm:py-8">
            <h2 className="text-3xl md:text-4xl font-bold text-info text-center mb-6">Contact With Me</h2>

            <div className="w-11/12 mx-auto  grid grid-cols-1 md:grid-cols-12 gap-12">

                {/* Left Side Form */}
                <div className="bg-white col-span-6  lg:col-span-8 p-8 rounded-lg shadow-xl">

                    <form onSubmit={handlesubmit}>
                        {/* name */}
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-lg font-medium text-primary mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-info"
                                required
                            />
                        </div>
                        {/* email */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-lg font-medium text-primary mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-info"
                                required
                            />
                        </div>
                        {/* message */}
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-lg font-medium text-primary mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="w-full resize-none px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-info"
                                required
                            ></textarea>
                        </div>
                        <button
                            className="w-full py-3 bg-info indigo-600 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all"
                        >
                            Send Email
                        </button>
                    </form>
                </div>

                {/* Right Side Contact Information */}
                <div className="card flex flex-col col-span-6 bg-white lg:col-span-4 rounded-lg shadow-xl">
                    <figure className="px-4 pt-4 group">
                        <img
                            src="https://i.ibb.co/gvWMSb8/image.png"
                            alt="sumon mitra"
                            className="rounded-xl transform transition duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-lg" />
                    </figure>
                    {/* body */}
                    <div className="card-body pt-2 px-4">
                        <h1 className='text-2xl text-primary font-semibold'>Sumon Mitra</h1>
                        {/* location */}
                        <div className="flex items-center gap-3">
                            <GoLocation className="text-info text-2xl" />
                            <span className="text-lg text-secondary">Kolkata, India</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <GoMail className="text-info text-2xl" />
                            <span className="text-lg text-secondary">sumonmit678@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <GoDeviceMobile className="text-info text-2xl" />
                            <span className="text-lg text-secondary">+91 9330542657</span>
                        </div>

                    </div>
               
                </div>

            </div>
        </section>
    );
};

export default Contact;