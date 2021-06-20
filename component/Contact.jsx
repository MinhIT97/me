function Contact() {
    return (
        <div className="h-screen  m-auto">

            <div className="text-center text-5xl font-bold">
                Are you ready to work together?
            </div>
            <div className="text-center mt-4 text-xl  text-gray-600">
                I’m always interested in hearing about new projects and opportunities. You can tell me about the problems you are trying to solve. I'd love to listen and see if there's anything I can do to help you.
            </div>

            <form action="" className="mt-10 max-w-lg m-auto">

                <div className="  gap gap-y-4 grid">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 "
                        placeholder="Name"
                    />
                    <input
                        type="text"
                        name="email"
                        id="email"
                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 "
                        placeholder="Email"
                    />
                    <textarea placeholder="Messenger" name="messgae" rows="5" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 ">

                    </textarea>

                </div>
            </form>
        </div>

    );
}

export default Contact;