import Badges1 from "@/components/Badges/Badges1 ";
import ButtonFieldsN from "@/components/Buttons/ButtonFieldsN ";
import ButtonSizes from "@/components/Buttons/ButtonSizes ";
import ButtonVariants from "@/components/Buttons/ButtonVariants ";
import Carousel from "@/components/Carousel/Carousel ";
import Checkboxes from "@/components/checkbox/checkbox ";
import ImgComponent from "@/components/ImageGallery/ImgComp ";
import InputField from "@/components/inputs/InputField ";
import DatePicker from "@/components/Javascript-components/DatePicker ";
import Modal from "@/components/Javascript-components/Modals ";
import PopoverDemo from "@/components/Javascript-components/PopOver ";
import TooltipDemo from "@/components/Javascript-components/Tooltip ";
import IconMenu from "@/components/menu-icons/IconMenu ";
import MenuLinks1 from "@/components/menu-icons/MenuLinks1 ";
import NavTabsCard1 from "@/components/nav-tabs/NavTabsC1 ";
import NavBgImg from "@/components/Navigation/NavBgImg ";
import NavComp from "@/components/Navigation/NavComp ";
import NavImg from "@/components/Navigation/NavImg ";
import NavOne from "@/components/Navigation/NavOne ";
import NavigationPills from "@/components/NavPills/NavPills ";
import NavigationPillsNext from "@/components/NavPills/NavPillsNext ";
import NotificationsPage from "@/components/Notifications/NotificationPage ";
import MainPazination from "@/components/Pagination/MainPazination ";
import ProgressCol from "@/components/progressBar/ProgressCol ";
import RadioBtn from "@/components/radiobuttons/RadioBtn ";
import DualSlider from "@/components/sliders/DualSlider ";
import SliderComp from "@/components/sliders/SliderComp ";
import TigBtns from "@/components/ToggleButton/TigBtns ";
import ParaTypo from "@/components/typography/ParaTypo ";
import QuoteTypo from "@/components/typography/QuoteTypo ";
import TypoGHeader from "@/components/typography/TypoGHeader ";
import TypoGraphy2 from "@/components/typography/TypoGraphy2 ";
import TyposLeft from "@/components/typography/TyposLeft ";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { IoMdMail } from "react-icons/io";
import { IoCompassOutline, IoSettingsOutline } from "react-icons/io5";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-24 ">
      <div className="flex-col">
        <ButtonFieldsN />
        <ButtonSizes />
        <ButtonVariants />
      </div>
      <div className="flex">
        <InputField />
      </div>
      <div className="flex space-x-10">
        <Checkboxes />
        <RadioBtn />
        <TigBtns />
      </div>
      <div className="flex space-x-10 items-center">
        <div>
          <ProgressCol />
        </div>
        <div>
          <MainPazination />
        </div>
      </div>
      <div className="space-y-10 space-x-10 justify-center items-center w-full">
        <div className="flex-col m-10">
          <SliderComp />
          <DualSlider />
        </div>
      </div>
      <div className="space-y-10 space-x-10 justify-center items-center w-full ">
        <div className="flex-col">
          <Badges1 />
        </div>
      </div>
      <div className=" justify-center items-center w-full ">
        <div className="flex">
          <MenuLinks1 />
          <IconMenu />
        </div>
      </div>
      <div className=" justify-center items-center w-full ">
        <div className="">
          <div>
            <NavOne />
          </div>
          <div>
            <NavComp
              title="Info Color"
              link1={{ text: "Discover" }}
              link2={{ text: "Profile" }}
              link3={{ text: "Settings" }}
              styleNC="bg-blue-500"
              styleBtn="bg-blue-400"
            />
          </div>
          <div>
            <NavComp
              title="Primary Color"
              link1={{ icon: <IoCompassOutline />, text: "Discover" }}
              link2={{ icon: <CgProfile />, text: "Profile" }}
              link3={{ icon: <IoSettingsOutline />, text: "Settings" }}
              styleNC="bg-purple-600"
              styleBtn="bg-purple-500"
            />
          </div>
          <div>
            <NavComp
              title="Navbar with  Notifications"
              link1={{ icon: <IoCompassOutline />, text: "Discover" }}
              link2={{ icon: <CgProfile />, text: "Profile" }}
              link3={{ icon: <IoMdMail />, text: "" }}
              styleNC="bg-black"
              styleBtn="bg-gray-900"
            />
          </div>
          <div>
            <NavImg />
          </div>
          <div>
            <NavBgImg />
          </div>
        </div>

        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="flex font-semibold text-xl mb-4 justify-center">
              Navigation Tabs
            </h3>
            <NavTabsCard1 />
          </div>
        </div>
        <div className=" bg-gray-50 flex items-center justify-center">
          <div className="w-full">
            <NavigationPills />
          </div>
          <div className="w-full">
            <NavigationPillsNext />
          </div>
        </div>
        <div className=" bg-gray-50 flex items-center justify-center">
          <NotificationsPage />
        </div>
        <div>
          <div className=" bg-gray-50 flex items-center justify-center">
            <TypoGHeader />
          </div>
          <div className=" bg-gray-50 flex items-center justify-center">
            <TypoGraphy2 />
          </div>
          <div className=" bg-gray-50 flex items-center justify-center">
            <ParaTypo />
          </div>
          <div className=" bg-gray-50 flex items-center justify-center">
            <QuoteTypo />
          </div>
          <div className=" bg-gray-50 flex items-center justify-center">
            <TyposLeft />
          </div>
        </div>
        <div className=" p-8 items-center flex flex-col">
          <h1 className="mb-8 text-2xl font-bold text-center">Images</h1>
          <ImgComponent />
        </div>
        <div className=" p-8 items-center flex flex-col">
          <div>
            <h1 className="mb-8 text-2xl font-bold text-center">Images</h1>
            <Modal />
            <DatePicker />
          </div>
          <div>
            <PopoverDemo />
            <TooltipDemo />
          </div>
        </div>
        <div className=" p-8 items-center flex flex-col">
          <Carousel />
        </div>

        <div className="flex flex-col space-y-4">
          <Link href="/login">
            <span className="text-purple-600 text-xl underline">
              View Login Page
            </span>
          </Link>
          <Link href="/landingPage">
            <span className="text-purple-600 text-xl underline">
              View Landing Page
            </span>
          </Link>
          <Link href="/profile">
            <span className="text-purple-600 text-xl underline">
              View Profile Page
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
