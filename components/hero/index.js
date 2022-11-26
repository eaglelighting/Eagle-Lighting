import Link from "next/link";
import Image from "next/image";

const Hero = () => {
    return (
        <section>
      <div className="bg-gray-100 pb-10">
        <div className=" mx-5 md:mx-20 lg:mx-40 text-center ">
          <h1 className="text-[30px] text-black pt-10 lg:pt-32 lg:pb-20 mx-10 lg:mx-0  font-bold opacity-80 leading-8 text-center ">
            Super fast assembly and maintenance package included. All done professionally.
          </h1>
          <p className="mt-8 opacity-60 text-black text-[20px] lg:pb-20 leading-snug">
            Do you ever what to show your holiday cheer but don't have the time to install all the lights and cords? Well Eagle Lighting is here for your ease of use so you can use that time on more important things while we take care of the work for you. 
          </p>
        </div>
        <div className="lg:flex lg:pb-20 ">
          <div className="md:w-[600px] md:mx-auto">
            <div className="h-[200px] shadow-lg mt-10 w-auto mx-10  rounded-lg relative">
              <Image
                src="/wow.png"
                alt="Picture of the author"
                layout="fill" // required
                objectFit="cover" // change to suit your needs
                className="rounded-lg " // just an example
              />
            </div>
            <div className="mx-10 text-[20px] mt-3">
              <h1 className="font-medium text-black opacity-80">
                Stay up to date through our online App
              </h1>
              <p className="text-[16px] text-black opacity-60">
                Easily create a request for a quote and we will contact you to make arrangements asap.
              </p>
            </div>
          </div>
          <div className="md:w-[600px] md:mx-auto">
            <div className="h-[200px] shadow-lg mt-10 w-auto mx-10  rounded-lg relative">
              <Image
                src="/okay.png"
                alt="Picture of the author"
                layout="fill" // required
                objectFit="cover" // change to suit your needs
                className="rounded-lg " // just an example
              />
            </div>
            <div className="mx-10 text-[20px] mt-3">
              <h1 className="font-medium text-black opacity-80">
                Equipment rental
              </h1>
              <p className="text-[16px] text-black opacity-60">
                our supper convenient equipment rental is a great deal. This package includes everything you need to show your holiday spirit.
              </p>
            </div>
          </div>
          <div className="md:w-[600px] md:mx-auto">
            <div className="h-[200px] shadow-lg mt-10 w-auto mx-10  rounded-lg relative">
              <Image
                src="/tree.png"
                alt="Picture of the author"
                layout="fill" // required
                objectFit="cover" // change to suit your needs
                className="rounded-lg " // just an example
              />
            </div>
            <div className="mx-10 text-[20px] mt-3">
              <h1 className="font-medium text-black opacity-80">
                Order our yearly subscription package for exclusive discounts
              </h1>
              <p className="text-[16px] text-black opacity-60">
                Pay for a year subscription and receive member deals.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className=" pt-6 bg-blue-300 lg:flex lg:w-full lg:pb-5">
        <div className="h-[150px] shadow-lg  w-auto mx-20 lg:mx-0 lg:ml-40 md:w-[300px] md:mx-auto  rounded-lg relative">
          <Image
            src="/images/gg.jpeg"
            alt="Picture of the author"
            layout="fill" // required
            objectFit="cover" // change to suit your needs
            className="rounded-lg " // just an example
          />
        </div>

        <div className="lg:flex lg:justify-between lg:w-full">
          <div className="lg:flex-col lg:ml-20">
            <h1 className="text-center lg:text-left lg:mx-0 mt-10 text-[25px] text-white font-light mx-6">
              Risk Free Money Back Guarantee{" "}
            </h1>
            <h1 className="text-center mt-3 lg:text-left text-white">
              Are you ready to have the smile you deserve?
            </h1>
          </div>
          <Link href={'productpage'}>
          <div className="flex mt-5 pb-5 justify-center lg:mr-40 lg:items-center ">
            <button className=" text-blue-300 bg-white  rounded-lg py-4 px-6 lg:h-[50px] hover:bg-blue-200 hover:text-white">
              Order Now!
            </button>
          </div>
          </Link>
        </div>
      </div>
      <div className="shadow-lg pb-10 lg:pb-20">
        <div className=" mx-5 md:mx-40 text-center ">
          <h1 className="text-[30px] md:text-[35px] pt-10 mx-10  font-bold opacity-80 leading-8 text-center ">
            Stylish and effective TOGO Pens.
          </h1>
          <p className="mt-8 opacity-60 text-[20px] leading-snug">
            Each of our pens feature beautiful, elegant packaging and offer the
            latest in applicator technology.
          </p>
        </div>
        <div className="md:w-[600px] lg:w-full lg:items-center lg:justify-center lg:flex md:mx-auto">
          <div className="h-[250px] lg:w-[400px] lg:h-[400px] shadow-lg mt-10 w-auto mx-10  rounded-lg relative">
            <Image
              src="/images/pen.jpeg"
              alt="Picture of the author"
              layout="fill" // required
              objectFit="contain" // change to suit your needs
              className="rounded-lg " // just an example
            />
          </div>
          <div className="mx-10 text-[20px] lg:w-1/2 mt-3">
            <h1 className="font-medium opacity-80">
              The latest in applicator technology.
            </h1>
            <p className="text-[16px] opacity-60">
              The “Whiter Image TOGO Pen” includes 60+ applications of our
              triple-action, stabilized hydrogen peroxide whitening gel
              supported by hydrators and accelerators designed for results even
              with sensitive teeth.
            </p>
          </div>
        </div>
        <div className="md:w-[600px] lg:w-full lg:items-center lg:justify-center lg:flex lg:flex-row-reverse md:mx-auto">
          <div className="h-[250px] lg:w-[400px] lg:h-[400px] shadow-lg mt-10 w-auto mx-10  rounded-lg relative">
            <Image
              src="/images/pen2.jpeg"
              alt="Picture of the author"
              layout="fill" // required
              objectFit="contain" // change to suit your needs
              className="rounded-lg " // just an example
            />
          </div>
          <div className="mx-10 text-[20px] lg:w-1/2 mt-3">
            <h1 className="font-medium opacity-80">
              the Whiter Image “Chic-Flic TOGO Duo Pen”
            </h1>
            <p className="text-[16px] opacity-60">
              Featuring both our premium whitening gel and our proprietary Lip
              Shine Plumper in one stylish casing with white stones and mini LED
              lights and mirrors built in for easy application.
            </p>
          </div>
        </div>
        <div className="md:w-[600px] lg:w-full lg:items-center lg:justify-center lg:flex md:mx-auto">
          <div className="h-[250px] lg:w-[400px] lg:h-[400px] shadow-lg mt-10 w-auto mx-10  rounded-lg relative">
            <Image
              src="/images/pen3.jpeg"
              alt="Picture of the author"
              layout="fill" // required
              objectFit="contain" // change to suit your needs
              className="rounded-lg " // just an example
            />
          </div>
          <div className="mx-10 text-[20px] lg:w-1/2 mt-3">
            <h1 className="font-medium opacity-80">Whiter Image</h1>
            <p className="text-[16px] opacity-60">
              At Whiter Image, we recognize the importance in offering only the
              finest solutions with quality, technology, and innovation in mind.
            </p>
          </div>
        </div>
      </div>
      <div className="md:w-[600px] md:mx-auto">
        <div className=" mx-8  text-center ">
          <h1 className="text-[30px] pt-10 mx-10 lg:mt-20 font-bold opacity-80 leading-8 text-center ">
            But Wait, there is more!
          </h1>
          <p className="mt-8 opacity-60 text-[20px] leading-snug lg:mb-20">
            Our proprietary technologies and delivery systems place a premium on
            customer results, comfort and safety with CE, ISO 9001 and ISO 13485
            quality standards.
          </p>
        </div>
      </div>
      <div className="mb-10">
        <div className="lg:flex lg:justify-center"> 
        <div>
          <div className="ml-[30px] md:w-[500px] md:mx-auto">
            <div className="h-[100px]  shadow-lg mt-10 w-[100px]   rounded-lg relative">
              <Image
                src="/images/teeth2.jpeg"
                alt="Picture of the author"
                layout="fill" // required
                objectFit="cover" // change to suit your needs
                className="rounded-lg " // just an example
              />
            </div>
            <div className="text-[20px] mt-3">
              <h1 className="font-medium opacity-80">Get instant results</h1>
              <p className="text-[16px] opacity-60">
                A foundation of our line is the unique hydrogen peroxide and
                carbamide peroxide gel blend in our products that delivers rapid
                results but is designed to be safe for sensitive teeth
              </p>
            </div>
          </div>
          <div className="ml-[30px] md:w-[500px] md:mx-auto">
            <div className="h-[100px]  shadow-lg mt-10 w-[100px]   rounded-lg relative">
              <Image
                src="/images/teeth1.jpeg"
                alt="Picture of the author"
                layout="fill" // required
                objectFit="cover" // change to suit your needs
                className="rounded-lg " // just an example
              />
            </div>
            <div className="text-[20px] mt-3">
              <h1 className="font-medium opacity-80">Results that last</h1>
              <p className="text-[16px] opacity-60">
                Whiter Image is proud to offer some of the most innovative,
                effective, and beautifully packaged teeth whitening solutions in
                the market.
              </p>
            </div>
          </div>
          <div className="ml-[30px] md:w-[500px] md:mx-auto">
            <div className="h-[100px]  shadow-lg mt-10 w-[100px]   rounded-lg relative">
              <Image
                src="/images/teeth3.jpeg"
                alt="Picture of the author"
                layout="fill" // required
                objectFit="cover" // change to suit your needs
                className="rounded-lg " // just an example
              />
            </div>
            <div className="text-[20px] mt-3">
              <h1 className="font-medium opacity-80">strength and safety</h1>
              <p className="text-[16px] opacity-60">
                stabilized hydrogen peroxide whitening gel supported by
                hydrators and accelerators designed for results even with
                sensitive teeth.
              </p>
            </div>
          </div>
        </div>
        <div>

        <div className="ml-[30px] md:w-[500px] md:mx-auto">
          <div className="h-[100px]  shadow-lg mt-10 w-[100px]   rounded-lg relative">
            <Image
              src="/images/teeth5.jpeg"
              alt="Picture of the author"
              layout="fill" // required
              objectFit="cover" // change to suit your needs
              className="rounded-lg " // just an example
            />
          </div>
          <div className="text-[20px] mt-3">
            <h1 className="font-medium opacity-80">
              Each Pen comes with 60 applications
            </h1>
            <p className="text-[16px] opacity-60">
              he “Whiter Image TOGO Pen” includes 60+ applications
            </p>
          </div>
        </div>
        <div className="ml-[30px] md:w-[500px] md:mx-auto">
          <div className="h-[100px]  shadow-lg mt-10 w-[100px]   rounded-lg relative">
            <Image
              src="/images/teeth6.jpeg"
              alt="Picture of the author"
              layout="fill" // required
              objectFit="cover" // change to suit your needs
              className="rounded-lg " // just an example
            />
          </div>
          <div className="text-[20px] mt-3">
            <h1 className="font-medium opacity-80">
              Subscribe for automated shipping
            </h1>
            <p className="text-[16px] opacity-60">
              Get automated shipping so you never forget to have your whitening
              pen ready to go!
            </p>
          </div>
        </div>
        
        </div>

        </div>
      </div>
      <div className=" pt-6 bg-blue-300">
        <div className="h-[150px] sm:h-[250px] shadow-lg lg:w-[300px] lg:mx-auto  w-auto mx-20  rounded-lg relative">
          <Image
            src="/images/product.jpeg"
            alt="Picture of the author"
            layout="fill" // required
            objectFit="cover" // change to suit your needs
            className="rounded-lg " // just an example
          />
        </div>
        <h1 className="text-center mt-10 text-[25px] text-white font-light mx-6">
          Ready to start having a whiter and brighter smile today?{" "}
        </h1>
        <h1 className="text-center mt-3 text-white">
          Order Now and recieve 20% off your first order!
        </h1>
        <Link href={'/productpage'}>
        <div className="flex mt-5 pb-5  justify-center">
          <button className=" text-blue-300 bg-white rounded-lg py-4 px-6 hover:bg-blue-200 hover:text-white">
            Order Now!
          </button>
        </div>
        </Link>
      </div> */}
      <div className=" shadow-md pb-20 mt-[50px] ">
        <div className=" mx-5 md:mx-20 lg:mx-40 text-center">
          <h1 className="text-[50px] text-black font-bold opacity-80 leading-10 text-center lg:mb-10 ">
            News Letter
          </h1>
          <p className="mt-5 text-black opacity-60 text-[20px] leading-snug lg:mb-10">
            Sign up for out news letter and recieve special discounts.
          </p>
        </div>

        <form className="flex justify-center mt-5">
          <input
            type="email"
            id="email"
            className="bg-gray-50 border outline-none border-gray-300 placeholder-black text-black text-sm rounded-lg 
          w-[220px] sm:w-[300px] md:w-[400px] focus:ring-blue-200 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black dark:text-white dark:focus:ring-blue-200 dark:focus:border-blue-200"
            placeholder="Email"
            required
          />
          <button
            type="submit"
            className="text-black ml-1 bg-gray-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            News Letter
          </button>
        </form>
      </div>
    </section>
  );
}

export default Hero;
