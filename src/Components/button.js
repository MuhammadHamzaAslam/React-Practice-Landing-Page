function Button({label = 'login' , height = 'h-11'}) {
    return (
        <>
        <button className={`inline-flex ${height} items-center border-2 mx-3 border-black bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-white transition ease-in-out delay-1.5s rounded text-base mt-4 md:mt-0`}>
          {label}
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>


        {/*  */}
        </>
    )
}
export default Button