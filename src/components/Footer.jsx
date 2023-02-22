import React from "react";

import Wrapper from "./Wrapper";
import gmailIcon from "../assets/email-icon.png";
import {scrollTo} from "../helper";
import callIcon from "../assets/phone-number-icon.png";

const Footer = () => {
	return (
		<div className="bg-[#F2F2F2]">
			<Wrapper>
				{/* NAVBAR START */}
				<div
					className="flex flex-col md:flex-row items-center justify-between gap-5 2xl:mt-[63px] relative text-[#111111] border-t border-[#CCCCCC] py-10">
					<div className="flex items-center gap-[6px]">
						<div className="w-[35px] h-[35px] rounded-full bg-[transparent] flex justify-center items-center">
							<img src={gmailIcon} alt="" className="w-[18px]"/>
						</div>
						<div><a target={"_blank"}
						        href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJftLrrRCDBcDKrNFfxMPnvnKftBNmWhRDhMRFlJpkwFWdlMMmBHHRwQgcRjCdcsqxWlwjq">iamzaidakbar@gmail.com</a> |
						</div>

						<div className="w-[35px] h-[35px] rounded-full bg-[transparent] flex justify-center items-center">
							<img src={callIcon} alt="" className="w-[18px]"/>
						</div>
						<div>7006 186 256
						</div>
					</div>
					<ul className="flex 2xl:text-[20px] gap-5 md:gap-8">
						<li
							className="cursor-pointer transition active:scale-90"
							onClick={() => scrollTo("about")}
						>
							About me
						</li>
						<li
							className="cursor-pointer transition active:scale-90"
							onClick={() => scrollTo("skills")}
						>
							Skills
						</li>
						<li
							className="cursor-pointer transition active:scale-90"
							onClick={() => scrollTo("work")}
						>
							Work
						</li>
						<li
							className="cursor-pointer transition active:scale-90"
							onClick={() => scrollTo("contact")}
						>
							Contact
						</li>
					</ul>
				</div>
				{/* NAVBAR END */}
			</Wrapper>
		</div>
	);
};

export default Footer;
