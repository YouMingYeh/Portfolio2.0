import {
  AiFillGithub,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai/index.js";
import { SiMedium } from "react-icons/si/index.js";

export default function MobileInfo() {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.download = `yehyouming's_resume.pdf`;
    link.href = "/resume.pdf";
    link.click();
  };

  return (
    <div className="p-3 pt-12">
      <span className="flex justify-center w-full font-bold text-2xl font-serif">
        My Info/>
      </span>
      <h1 className="text-2xl font-bold underline font-serif">Bio</h1>
      <p className="py-1">
        <span className="font-bold">2002 </span>
        <span>Born in Taoyuan, Taiwan 🇹‍🇼</span>
      </p>
      <p className="py-1">
        <span className="font-bold">2023 </span>
        <span>PDAO 2023 System Management</span>
      </p>
      <p className="py-1">
        <span className="font-bold">2021 - present </span>
        <h1>
          <span>&nbsp;&nbsp;</span>
          Major in Information Management,
        </h1>
        <h1>
          <span>&nbsp;&nbsp;</span>National Taiwan University（國立臺灣大學
          資訊管理學系）
        </h1>
      </p>

      <h1 className="text-2xl font-bold underline py-3 font-serif">My ❣</h1>
      <p className="py-1">
        I love playing guitar 🎸 and film camera 📷. Also, kitties 🐈 are the
        best !!!!
      </p>

      <h1 className="text-2xl font-bold underline py-3 font-serif">On web</h1>
      <p className="py-1 flex">
        <AiFillGithub />
        <a
          href="https://github.com/YouMingYeh"
          className="link after:content-['_↗']"
        >
          GitHub
        </a>
      </p>
      <p className="py-1 flex">
        <AiFillFacebook />
        <a
          href="https://www.facebook.com/profile.php?id=100010253504873"
          className="link after:content-['_↗']"
        >
          Facebook
        </a>
      </p>
      <p className="py-1 flex">
        <AiFillInstagram />
        <a
          href="https://www.instagram.com/yymin_16/"
          className="link after:content-['_↗']"
        >
          Instagram
        </a>
      </p>

      <p className="py-1 flex">
        <SiMedium />
        <a
          href="https://medium.com/@ym911216"
          className="link after:content-['_↗']"
        >
          Blog
        </a>
      </p>

      <h1 className="text-2xl font-bold underline py-3 font-serif">Contact?</h1>
      <p className="py-1 ">email: b10705052@ntu.edu.tw (frequently used)</p>
      <p className="py-1">gmail: ym911216@gmail.com</p>
      <p className="py-1">phone: +886 0976343024</p>
      <div className="w-full flex justify-center">
        <button
          className="btn self-center btn-xl btn-outline w-fit rotate-2 hover:rotate-6 hover:scale-125"
          onClick={downloadResume}
        >
          <span className="font-extrabold text-2xl font-serif">
            Download my Resume
          </span>
        </button>
      </div>
    </div>
  );
}
