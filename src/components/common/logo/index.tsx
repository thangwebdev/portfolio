import "animate.css";
export default function Logo() {
  return (
    <svg
      className="animate__animated animate__bounceIn animate__slow animate__delay-2s"
      width={40}
      height={40}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 15C0 6.71573 6.71573 0 15 0H33C41.2843 0 48 6.71573 48 15V33C48 41.2843 41.2843 48 33 48H6C2.68629 48 0 45.3137 0 42V15Z"
        fill="#FF6969"
      />
      <path
        d="M12.488 20.904C12.904 22.3013 13.2987 23.752 13.672 25.256C14.0453 26.76 14.3973 28.2853 14.728 29.832C15.1547 28.264 15.5813 26.7333 16.008 25.24C16.4453 23.736 16.8347 22.4027 17.176 21.24C17.2293 21.0693 17.272 20.9093 17.304 20.76C17.336 20.6 17.3573 20.44 17.368 20.28C17.368 20.1733 17.416 20.0987 17.512 20.056C17.608 20.0133 17.72 19.992 17.848 19.992C18.008 19.992 18.1627 20.024 18.312 20.088C18.472 20.152 18.5573 20.232 18.568 20.328C18.5893 20.4667 18.6107 20.5733 18.632 20.648C18.6533 20.7227 18.6747 20.808 18.696 20.904C18.9733 21.8427 19.256 22.8453 19.544 23.912C19.832 24.9787 20.0987 26.024 20.344 27.048C20.6 28.072 20.8187 29.0053 21 29.848C21.4373 28.2587 21.8693 26.76 22.296 25.352C22.7227 23.944 23.1067 22.6907 23.448 21.592C23.5333 21.3253 23.6187 21.0373 23.704 20.728C23.7893 20.408 23.8693 20.0987 23.944 19.8C23.976 19.704 24.056 19.656 24.184 19.656C24.3333 19.656 24.4933 19.7147 24.664 19.832C24.8453 19.9387 24.936 20.0613 24.936 20.2C24.936 20.2427 24.9307 20.2747 24.92 20.296C24.8027 20.5733 24.664 20.9307 24.504 21.368C24.344 21.7947 24.1467 22.36 23.912 23.064C23.6773 23.768 23.3947 24.664 23.064 25.752C22.7333 26.8293 22.3387 28.152 21.88 29.72C21.8373 29.8907 21.7947 30.0773 21.752 30.28C21.7093 30.4827 21.6613 30.6853 21.608 30.888C21.544 31.1227 21.4053 31.24 21.192 31.24C21.032 31.24 20.8613 31.16 20.68 31C20.5093 30.84 20.3813 30.5947 20.296 30.264C20.072 29.2933 19.8267 28.296 19.56 27.272C19.304 26.2373 19.0427 25.224 18.776 24.232C18.52 23.24 18.2693 22.3227 18.024 21.48C17.7787 22.2693 17.512 23.1387 17.224 24.088C16.9467 25.0267 16.6693 25.9867 16.392 26.968C16.1147 27.9387 15.848 28.8613 15.592 29.736C15.5493 29.896 15.5067 30.072 15.464 30.264C15.4213 30.4453 15.3627 30.6533 15.288 30.888C15.224 31.112 15.096 31.224 14.904 31.224C14.744 31.224 14.5787 31.1387 14.408 30.968C14.248 30.7973 14.1253 30.5627 14.04 30.264C14.008 30.104 13.9333 29.7947 13.816 29.336C13.6987 28.8667 13.56 28.3067 13.4 27.656C13.24 26.9947 13.0587 26.296 12.856 25.56C12.664 24.8133 12.4667 24.0827 12.264 23.368C12.072 22.6533 11.8853 22.008 11.704 21.432C11.5227 20.8453 11.3573 20.3813 11.208 20.04C11.1973 20.0187 11.192 19.992 11.192 19.96C11.192 19.8747 11.2347 19.816 11.32 19.784C11.4053 19.752 11.5013 19.736 11.608 19.736C11.7573 19.736 11.896 19.7627 12.024 19.816C12.1627 19.8693 12.2427 19.944 12.264 20.04L12.488 20.904ZM27.7821 31.096C27.5155 31.096 27.2488 31.0853 26.9821 31.064C26.7261 31.0427 26.4755 31.016 26.2301 30.984C26.0381 30.952 25.9421 30.872 25.9421 30.744C25.9421 30.6907 25.9688 30.6373 26.0221 30.584C26.0755 30.5307 26.1501 30.4987 26.2461 30.488C26.3315 30.4773 26.4435 30.472 26.5821 30.472C26.7315 30.4613 26.8061 30.456 26.8061 30.456V20.952C26.6675 20.9307 26.5448 20.856 26.4381 20.728C26.3315 20.5893 26.2781 20.456 26.2781 20.328C26.2781 20.2213 26.3261 20.1467 26.4221 20.104C26.6355 20.0187 26.9448 19.944 27.3501 19.88C27.7661 19.8053 28.2088 19.7467 28.6781 19.704C29.1475 19.6613 29.5635 19.64 29.9261 19.64C30.7155 19.64 31.4621 19.7733 32.1661 20.04C32.8808 20.3067 33.5101 20.6853 34.0541 21.176C34.5981 21.6667 35.0248 22.2587 35.3341 22.952C35.6541 23.6453 35.8141 24.424 35.8141 25.288C35.8141 26.152 35.6755 26.9093 35.3981 27.56C35.1315 28.2107 34.7688 28.76 34.3101 29.208C33.8515 29.656 33.3395 30.0133 32.7741 30.28C32.2088 30.5467 31.6381 30.7333 31.0621 30.84C30.5181 30.936 29.9955 31 29.4941 31.032C28.9928 31.064 28.4968 31.0853 28.0061 31.096H27.7821ZM27.7341 30.456C28.2461 30.4453 28.7741 30.408 29.3181 30.344C29.8728 30.28 30.4061 30.1893 30.9181 30.072C31.3661 29.9653 31.8195 29.7947 32.2781 29.56C32.7368 29.3147 33.1635 29 33.5581 28.616C33.9528 28.2213 34.2675 27.7467 34.5021 27.192C34.7475 26.6373 34.8701 25.9973 34.8701 25.272C34.8701 24.5253 34.7315 23.8587 34.4541 23.272C34.1768 22.6747 33.7981 22.168 33.3181 21.752C32.8381 21.336 32.2995 21.0213 31.7021 20.808C31.1048 20.584 30.4861 20.472 29.8461 20.472C29.4941 20.472 29.1368 20.4933 28.7741 20.536C28.4115 20.5787 28.0648 20.6427 27.7341 20.728V30.456Z"
        fill="white"
      />
    </svg>
  );
}