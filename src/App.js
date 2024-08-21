
import './App.css';
import Button from './Components/button';
import blogPic from './blog.png'
import webGlowing from './webglow.png'
import pf from './pf.png'
function App() {
  return (
    <>
      {/* navbar started */}
      <header className="text-gray-600 body-font bg-gray-100">
        <div
          className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
          bis_skin_checked={1}
        >
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm60mg-EtXsfFS0zrf_04AMtzb47nG8i6tOw&s' className='h-10' />
            <span className="ml-3 text-xl">React</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900 cursor-pointer font-bold">Home</a>
            <a className="mr-5 hover:text-gray-900 cursor-pointer font-bold">About</a>
            <a className="mr-5 hover:text-gray-900 cursor-pointer font-bold">Testinomial</a>
            <a className="mr-5 hover:text-gray-900 cursor-pointer font-bold">Contact</a>
          </nav>
          <Button />
        </div>
      </header>
      {/* navbar ended */}

      {/* hero section started */}
      <section className="text-gray-600 body-font">
        <div
          className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
          bis_skin_checked={1}
        >
          <div
            className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
            bis_skin_checked={1}
          >
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Build Fast and Scalable Applications with React
              <br className="hidden lg:inline-block" />
              The Most Popular JavaScript Library
            </h1>
            <p className="mb-8 leading-relaxed">
              React is a JavaScript library for building user interfaces. It's ideal for building reusable UI components and managing state changes in complex applications. With React, you can build fast, scalable, and maintainable applications that provide a great user experience.
            </p>
            <div className="flex justify-center" bis_skin_checked={1}>
              <Button label='Learn More' />
              <Button label='Get Started' />
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 " bis_skin_checked={1}>
            <img
              className="object-cover object-center rounded h-96"
              alt="React Logo"
              src="https://www.svgrepo.com/show/327388/logo-react.svg"
            />
          </div>
        </div>
      </section>
      {/* hero section ended */}
      {/* Blog Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto" bis_skin_checked={1}>
          <div className="flex flex-wrap -m-4" bis_skin_checked={1}>
            <div className="p-4 md:w-1/3" bis_skin_checked={1}>
              <div
                className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
                bis_skin_checked={1}
              >
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={blogPic}
                  alt="blog"
                />
                <div className="p-6" bis_skin_checked={1}>
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The Catalyzer
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                    microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap " bis_skin_checked={1}>
                    <a href='https://saylani-blog-hackathon-1908.netlify.app/' className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Visit Site
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx={12} cy={12} r={3} />
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3" bis_skin_checked={1}>
              <div
                className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
                bis_skin_checked={1}
              >
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://dummyimage.com/721x401"
                  alt="blog"
                />
                <div className="p-6" bis_skin_checked={1}>
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The 400 Blows
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                    microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap" bis_skin_checked={1}>
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx={12} cy={12} r={3} />
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3" bis_skin_checked={1}>
              <div
                className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
                bis_skin_checked={1}
              >
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://dummyimage.com/722x402"
                  alt="blog"
                />
                <div className="p-6" bis_skin_checked={1}>
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Shooting Stars
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                    microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap " bis_skin_checked={1}>
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx={12} cy={12} r={3} />
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>

  );
}


export default App;
