export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 text-center">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">
              The tool your team deserves
            </h2>
            <p className="text-xl text-gray-400">
              Efficiently handle tasks and communication: full-fledged chats, various task viewing modes, intuitive interface, cross-platform compatibility
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="19" cy="19" r="19" fill="#5D5FEF" />
                <path d="M11 19C11 14.5817 14.5817 11 19 11V11C23.4183 11 27 14.5817 27 19V24.0909C27 24.9375 27 25.3608 26.8739 25.6989C26.6712 26.2425 26.2425 26.6712 25.6989 26.8739C25.3608 27 24.9375 27 24.0909 27H19C14.5817 27 11 23.4183 11 19V19Z" stroke="white" />
                <path d="M16 18L22 18" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19 22H22" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              <h4 className="h4 mb-2">Full-Fledged Chat</h4>
              <p className="text-lg text-gray-400 text-center">
                Communicate with utmost flexibility. Send text or audio messages, attach media, react, edit, delete messages, and use replies and forwards for effective communication
              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="19" cy="19" r="19" fill="#5D5FEF" />
                <circle cx="19" cy="16" r="1.5" stroke="white" stroke-linecap="round" />
                <path d="M22.701 15.25C22.8999 14.9055 23.2275 14.6541 23.6118 14.5511C23.996 14.4481 24.4055 14.502 24.75 14.701C25.0945 14.8999 25.3459 15.2275 25.4489 15.6118C25.5519 15.996 25.498 16.4055 25.299 16.75C25.1001 17.0945 24.7725 17.3459 24.3882 17.4489C24.004 17.5519 23.5945 17.498 23.25 17.299C22.9055 17.1001 22.6541 16.7725 22.5511 16.3882C22.4481 16.004 22.502 15.5945 22.701 15.25L22.701 15.25Z" stroke="white" />
                <path d="M12.701 15.25C12.8999 14.9055 13.2275 14.6541 13.6118 14.5511C13.996 14.4481 14.4055 14.502 14.75 14.701C15.0945 14.8999 15.3459 15.2275 15.4489 15.6118C15.5519 15.996 15.498 16.4055 15.299 16.75C15.1001 17.0945 14.7725 17.3459 14.3882 17.4489C14.004 17.5519 13.5945 17.498 13.25 17.299C12.9055 17.1001 12.6541 16.7725 12.5511 16.3882C12.4481 16.004 12.502 15.5945 12.701 15.25L12.701 15.25Z" stroke="white" />
                <path d="M27.3639 22.5122L26.8776 22.6288L26.8776 22.6288L27.3639 22.5122ZM21.1 20.1854L20.8093 19.7786L20.2769 20.1589L20.7838 20.5727L21.1 20.1854ZM22.3804 22.5097L22.8697 22.4068L22.8697 22.4068L22.3804 22.5097ZM26.4999 23H21.5V24H26.4999V23ZM26.8776 22.6288C26.9012 22.7271 26.8757 22.8068 26.8169 22.8717C26.7527 22.9424 26.6412 23 26.4999 23V24C27.2996 24 28.0709 23.3171 27.8501 22.3957L26.8776 22.6288ZM23.5 20C24.726 20 25.4895 20.4087 25.9822 20.9118C26.4884 21.4286 26.7475 22.0859 26.8776 22.6288L27.8501 22.3957C27.6963 21.7541 27.3754 20.9052 26.6966 20.2121C26.0043 19.5051 24.9778 19 23.5 19V20ZM21.3906 20.5922C21.8685 20.2508 22.54 20 23.5 20V19C22.3544 19 21.4745 19.3034 20.8093 19.7786L21.3906 20.5922ZM20.7838 20.5727C21.4368 21.1059 21.7483 21.9336 21.8911 22.6125L22.8697 22.4068C22.7084 21.6398 22.3299 20.5441 21.4162 19.7981L20.7838 20.5727ZM21.8911 22.6125C21.9127 22.7155 21.8843 22.801 21.8215 22.8694C21.7542 22.9427 21.641 23 21.5 23V24C22.3038 24 23.0615 23.3194 22.8697 22.4068L21.8911 22.6125Z" fill="white" />
                <path d="M16.9 20.1854L17.2162 20.5727L17.7231 20.1589L17.1907 19.7785L16.9 20.1854ZM10.6361 22.5122L11.1224 22.6288L11.1224 22.6288L10.6361 22.5122ZM15.6196 22.5097L15.1303 22.4068L15.1303 22.4068L15.6196 22.5097ZM14.5 20C15.46 20 16.1315 20.2508 16.6094 20.5922L17.1907 19.7785C16.5255 19.3033 15.6456 19 14.5 19V20ZM11.1224 22.6288C11.2525 22.0859 11.5116 21.4286 12.0178 20.9118C12.5105 20.4087 13.274 20 14.5 20V19C13.0222 19 11.9957 19.5051 11.3034 20.2121C10.6246 20.9052 10.3037 21.7541 10.1499 22.3957L11.1224 22.6288ZM11.5 23C11.3588 23 11.2473 22.9424 11.1831 22.8717C11.1243 22.8068 11.0988 22.7271 11.1224 22.6288L10.1499 22.3957C9.92906 23.3171 10.7004 24 11.5 24V23ZM16.5 23H11.5V24H16.5V23ZM16.5 23C16.359 23 16.2457 22.9427 16.1784 22.8694C16.1157 22.801 16.0873 22.7155 16.1089 22.6125L15.1303 22.4068C14.9385 23.3194 15.6961 24 16.5 24V23ZM16.1089 22.6125C16.2516 21.9336 16.5632 21.1059 17.2162 20.5727L16.5838 19.7981C15.6701 20.5441 15.2915 21.6398 15.1303 22.4068L16.1089 22.6125Z" fill="white" />
                <path d="M19 19.5C21.3642 19.5 22.1314 21.3251 22.3804 22.5097C22.494 23.0501 22.0523 23.5 21.5 23.5H16.5C15.9477 23.5 15.506 23.0501 15.6196 22.5097C15.8686 21.3251 16.6358 19.5 19 19.5Z" stroke="white" stroke-linecap="round" />
                <path d="M25.5 28.5H27C27.8284 28.5 28.5 27.8284 28.5 27V25.5" stroke="white" stroke-linecap="round" />
                <path d="M25.5 9.5H27C27.8284 9.5 28.5 10.1716 28.5 11V12.5" stroke="white" stroke-linecap="round" />
                <path d="M12.5 28.5H11C10.1716 28.5 9.5 27.8284 9.5 27V25.5" stroke="white" stroke-linecap="round" />
                <path d="M12.5 9.5H11C10.1716 9.5 9.5 10.1716 9.5 11V12.5" stroke="white" stroke-linecap="round" />
              </svg>

              <h4 className="h4 mb-2">Personal and Group Chats</h4>
              <p className="text-lg text-gray-400 text-center">
                Communicate privately and coordinate team efforts with our personal and group chats. Engage individually or collectively, ensuring smooth interaction
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="19" cy="19" r="19" fill="#5D5FEF" />
                <path d="M16 17L19.2581 19.4436C19.6766 19.7574 20.2662 19.6957 20.6107 19.3021L27 12" stroke="white" stroke-linecap="round" />
                <path d="M28 19C28 20.8805 27.411 22.7137 26.3156 24.2423C25.2203 25.7709 23.6736 26.9179 21.893 27.5224C20.1123 28.1268 18.187 28.1583 16.3874 27.6125C14.5879 27.0666 13.0046 25.9707 11.8598 24.4789C10.715 22.987 10.0663 21.174 10.0048 19.2945C9.94329 17.415 10.472 15.5634 11.5168 13.9999C12.5615 12.4363 14.0698 11.2392 15.8297 10.5768C17.5897 9.91444 19.513 9.81996 21.3294 10.3067" stroke="white" stroke-linecap="round" />
              </svg>

              <h4 className="h4 mb-2">Tasks</h4>
              <p className="text-lg text-gray-400 text-center">
                Efficiently manage projects with our task feature, covering a full-fledged chat, title, status, participants, and a description with a powerful user-friendly editor.
              </p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="19" cy="19" r="19" fill="#5D5FEF" />
                <path d="M9 19C9 17.1308 9 16.1962 9.40192 15.5C9.66523 15.0439 10.0439 14.6652 10.5 14.4019C11.1962 14 12.1308 14 14 14H24C25.8692 14 26.8038 14 27.5 14.4019C27.9561 14.6652 28.3348 15.0439 28.5981 15.5C29 16.1962 29 17.1308 29 19C29 20.8692 29 21.8038 28.5981 22.5C28.3348 22.9561 27.9561 23.3348 27.5 23.5981C26.8038 24 25.8692 24 24 24H14C12.1308 24 11.1962 24 10.5 23.5981C10.0439 23.3348 9.66523 22.9561 9.40192 22.5C9 21.8038 9 20.8692 9 19Z" stroke="white" />
                <path d="M26 11C26 9.89543 25.1046 9 24 9H14C12.8954 9 12 9.89543 12 11" stroke="white" />
                <path d="M26 27C26 28.1046 25.1046 29 24 29H14C12.8954 29 12 28.1046 12 27" stroke="white" />
                <rect x="12.5" y="17.5" width="5" height="1" rx="0.5" stroke="white" />
              </svg>
              <h4 className="h4 mb-2">Tasks Viewing Options</h4>
              <p className="text-lg text-gray-400 text-center">
                Approach tasks differently based on your goal: view them as a chat list for quick communication or use a card board for convenient management
              </p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="19" cy="19" r="19" fill="#5D5FEF" />
                <path d="M14 11.5H24C24.9569 11.5 25.6244 11.5011 26.1279 11.5688C26.6171 11.6345 26.8762 11.7548 27.0607 11.9393C27.2452 12.1238 27.3655 12.3829 27.4312 12.8721C27.4989 13.3756 27.5 14.0431 27.5 15V23.5H10.5V15C10.5 14.0431 10.5011 13.3756 10.5688 12.8721C10.6345 12.3829 10.7548 12.1238 10.9393 11.9393C11.1238 11.7548 11.3829 11.6345 11.8721 11.5688C12.3756 11.5011 13.0431 11.5 14 11.5Z" stroke="white" />
                <path d="M27.3333 23.5H10.6667C10.0223 23.5 9.5 24.0223 9.5 24.6667C9.5 25.6792 10.3208 26.5 11.3333 26.5H26.6667C27.6792 26.5 28.5 25.6792 28.5 24.6667C28.5 24.0223 27.9777 23.5 27.3333 23.5Z" stroke="white" />
              </svg>

              <h4 className="h4 mb-2">Suitable for All Devices</h4>
              <p className="text-lg text-gray-400 text-center">
                Our apps ensure convenient operation on phones, tablets, and desktops running iOS, Android, macOS, as well as in the web version
              </p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="19" cy="19" r="19" fill="#5D5FEF" />
                <circle cx="19" cy="19" r="9.5" stroke="white" stroke-linecap="round" />
                <circle cx="16" cy="17" r="1" fill="white" stroke="white" stroke-linecap="round" />
                <circle cx="22" cy="17" r="1" fill="white" stroke="white" stroke-linecap="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6289 22C15.3491 22 15.2092 22 15.1346 22.1068C15.0599 22.2136 15.1032 22.3318 15.1897 22.5683C15.7059 23.9788 17.2166 25 19 25C20.7833 25 22.2941 23.9788 22.8102 22.5683C22.8968 22.3318 22.94 22.2136 22.8654 22.1068C22.7908 22 22.6509 22 22.3711 22H15.6289Z" fill="white" />
              </svg>


              <h4 className="h4 mb-2">Made for People</h4>
              <p className="text-lg text-gray-400 text-center">
                Our application features a simple and intuitive interface, allowing you to focus on your work rather than spending time learning how to use it
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
