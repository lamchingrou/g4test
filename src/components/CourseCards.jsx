export default function CourseCards(props) {
    const rows = Object.values(props.data).map(function (item, index) {
    return <div class="group block bg-white p-6 transition-shadow hover:shadow-sm sm:pr-12">
        <span class="inline-block p-2 text-white">
        {/* <span class="inline-block rounded-sm bg-indigo-600 p-2 text-white"> */}
            {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            />
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
            </svg> */}
            <img
                alt="Man"
                src ={require("../images/geraldleejieren.jpg")}
                className="h-14 w-14 rounded-full object-cover"
            />
        </span>

        <h3 class="mt-3 text-lg font-bold">
            {item['Course_Name']}
        </h3>

        <p class="mt-3 text-sm text-gray-500">
            {item['Course_Desc']}
        </p>

        {/* <p class="relative mt-16 inline-block text-sm font-bold text-indigo-600">
            <span
            class="absolute inset-x-0 bottom-0 h-2/3 transform bg-indigo-100 transition-transform group-hover:scale-110"
            ></span>
            <span class="relative">Find out more</span>
        </p> */}
        </div>
    })
    return (
        <tbody className="divide-y divide-gray-200">
            {rows}

        </tbody>

    )
}