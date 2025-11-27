"use client";
// import Image from "next/image";
// import Link from "next/link";


const Footer = () => {
  return <>
  <div className="bg-blue-800 text-white grid grid-cols-3">
    <div>
      <div>
        <h2>Administration:</h2>
        <p>39 63 49 00 (hverdage 10 - 14)</p>
      </div>
      <div>
        <h2>Billettelefon:</h2>
        <p>Ticketmaster: 38 48 16 30 (hverdage 10 - 16.30)</p>
        <p>Kørestol- og ledsagerpladser: 38 48 16 33 </p>
      </div>
      <div className="">
        <h2>Praktisk:</h2>
        <button>Handelsbetingelser</button>
        <button>CVR</button>
        <button>Privatdatapolitik</button>
        <button>Årsrapporter</button>
        <button>Vedtægter</button>
        <button>Egnsaftale</button>
        <button>Presse</button>
      </div>
    </div>
    <div>
      <div>
        <h1>Hold dig opdateret</h1>
        <p>Ja, tak, jeg vil gerne modtage nyhedsbrev per email fra Bellevue Teatret med markedsføring af aktuelle og nye forestillinger, nyt om teatret, arrangementer, tilbud o.a. Du kan til hver en tid afmelde dig igen.</p>
        <div>
          <p>Email</p>
          <input type="Email" />
          <button>Tilmeld</button>
        </div>
        {/* Image af logo */}
      </div>
    </div>
      <div>
        <button className=" text-gray-200 border-2 border-gray-200 pt-2 pb-2 pl-7 pr-7 rounded-xl">Find vej</button>
        <h2>Strandvejen 451​ 2930 Klampenborg</h2>
      </div>
      <div>
        {/* logo af some */}
      </div>
  </div>
  </>;
};

export default Footer;
