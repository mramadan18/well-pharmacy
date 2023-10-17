import Button from "../Utilities/Button";

const RequestCall = ({ setShowModal, setIsOpen }) => {
  const handleShowRequest = () => {
    if (window.innerWidth < 992) {
      setIsOpen(true);
    } else {
      setShowModal(true);
    }
  };
  return (
    <div className="bg-white p-6 flex flex-col justify-center items-center gap-6 text-center lg:shadow-secondShadow lg:rounded-lg">
      <h3>Reach us via</h3>
      <div className="w-full flex flex-col justify-center gap-6">
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.45214 8.37117L8.81134 5.16717C8.64334 4.32597 7.90414 3.71997 7.04614 3.71997H3.16654C2.13454 3.71997 1.27534 4.59237 1.32214 5.62317C1.87534 17.8164 7.92094 22.4532 18.6201 22.9188C19.6509 22.9632 20.5209 22.1076 20.5209 21.0768V17.1948C20.5209 16.3368 19.9149 15.5976 19.0737 15.4296L15.8697 14.7888C15.0741 14.6292 14.2701 15.0228 13.9065 15.7488L13.3209 16.9188C10.9209 16.9188 7.32094 13.3188 7.32094 10.9188L8.49094 10.3332C9.21814 9.97077 9.61174 9.16677 9.45214 8.37117Z"
                fill="#0F4392"
              />
            </svg>
            <span>(+20)1050777117</span>
          </div>

          <a href="tel:+201050777117">
            <button className="border-2 border-primary bg-white text-primary font-bold py-1 px-6 flex justify-center items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9.45214 8.37117L8.81134 5.16717C8.64334 4.32597 7.90414 3.71997 7.04614 3.71997H3.16654C2.13454 3.71997 1.27534 4.59237 1.32214 5.62317C1.87534 17.8164 7.92094 22.4532 18.6201 22.9188C19.6509 22.9632 20.5209 22.1076 20.5209 21.0768V17.1948C20.5209 16.3368 19.9149 15.5976 19.0737 15.4296L15.8697 14.7888C15.0741 14.6292 14.2701 15.0228 13.9065 15.7488L13.3209 16.9188C10.9209 16.9188 7.32094 13.3188 7.32094 10.9188L8.49094 10.3332C9.21814 9.97077 9.61174 9.16677 9.45214 8.37117Z"
                  fill="#0F4392"
                />
              </svg>
              <span>Call now</span>
            </button>
          </a>
        </div>

        <div className="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clipPath="url(#clip0_415_5188)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.5984 9.6C21.5984 4.296 17.3024 0 11.9984 0C6.69444 0 2.39844 4.296 2.39844 9.6C2.39844 9.78 2.39844 9.948 2.41044 10.128C2.56644 14.388 4.79844 19.272 10.9664 23.676C11.5784 24.108 12.4184 24.108 13.0304 23.676C19.1984 19.272 21.4304 14.388 21.5864 10.128C21.5984 9.94803 21.5984 9.77996 21.5984 9.6ZM14.5436 12.1452C15.2192 11.4708 15.5984 10.5552 15.5984 9.6C15.5984 8.6448 15.218 7.7304 14.5436 7.0548C13.8692 6.3792 12.9536 6 11.9984 6C11.0432 6 10.1288 6.3804 9.45324 7.0548C8.77764 7.7292 8.39844 8.6448 8.39844 9.6C8.39844 10.5552 8.77764 11.4708 9.45324 12.1452C10.1276 12.8208 11.0432 13.2 11.9984 13.2C12.9524 13.2 13.868 12.8208 14.5436 12.1452Z"
                fill="#0F4392"
              />
            </g>
            <defs>
              <clipPath id="clip0_415_5188">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <span>Tal - white hills hotel, Sharm Elsheikh, Egypt</span>
        </div>
      </div>

      <Button className="w-full" onClick={handleShowRequest}>
        Request a call
      </Button>
    </div>
  );
};

export default RequestCall;
