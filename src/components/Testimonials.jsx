import React from "react";
import {motion, useScroll, useTransform} from "framer-motion";

import Wrapper from "./Wrapper";
import Div from "./Div";
import pe1 from "../assets/sec-4-p-e-1.png";
import pe2 from "../assets/sec-4-p-e-2.png";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import "../slider.css";

const Testimonials = () => {
	const {scrollY} = useScroll();
	const y1 = useTransform(scrollY, [0, 4500], [1000, 0], {clamp: false});
	const y2 = useTransform(scrollY, [0, 4500], [2000, 0], {clamp: false});
	return (<div className="w-full py-[50px] md:py-[100px] bg-white relative overflow-hidden">
		{/* BACKGROUND ELEMENTS START */}
		<span className="sec-2-bg-gradient"/>
		<motion.img
			className="sec-4-p-e-1 rellax"
			style={{y: y1}}
			src={pe1}
		/>
		<motion.img
			className="sec-4-p-e-2 rellax"
			style={{y: y2}}
			src={pe2}
		/>
		{/* BACKGROUND ELEMENTS END */}

		<Wrapper>
			{/* SECTION HEADING START */}
			<Div className="mb-10 relative">
				<div
					className="flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-2 text-[#111111]">
					What they Says
				</div>
				<div
					className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
					My Co-Workers, Clients, Associates, send me a bunch of smiles with my service and i love them.
				</div>
			</Div>
			{/* SECTION HEADING END */}

			{/* CAROUSEL START */}
			<Div className="bg-[#F2F2F2] w-full md:w-[834px] rounded-[20px] mx-auto relative mb-[50px]">
				<Carousel>
					{/* SLIDE START */}
					<div className="text-black flex items-center flex-col px-[25px] md:px-[50px] py-[50px]">
						<div className="mb-[25px]">
							<img
								src="https://i.pravatar.cc/300"
								className="w-[80px] h-[80px] max-w-[80px] rounded-full"
							/>
							<div className="font-bold">Faizan</div>
							<div
								className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
								Co-Worker
							</div>
						</div>
						<div
							className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
							I have worked very closely with Zaid in a team and have learnt a lot from him. He is
							one of a very efficient, responsible and knowledgeable person I have ever worked with.
							Apart from that he is very amiable and helpful. I have reached him out for his help many
							times during my work and he has always helped me in his best capacity. His problem
							solving abilities and command over React.Js, Javascript, Redux, etc. makes him a
							perfect resource for any team he will be joining.
						</div>
					</div>
					{/* SLIDE END */}
					{/* SLIDE START */}
					<div className="text-black flex items-center flex-col px-[25px] md:px-[50px] py-[50px]">
						<div className="mb-[25px]">
							<img
								src="https://i.pravatar.cc/300"
								className="w-[80px] h-[80px] max-w-[80px] rounded-full"
							/>
							<div className="font-bold">Rayan</div>
							<div
								className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
								Co-Worker
							</div>
						</div>
						<div
							className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
							I have known Zaid from past 5 years, there are only a handful of people I know, who are
							as hardworking as he is, once he sets his mind on learning a new technology he puts all
							his efforts to be a master at it.
							Zaid is exceptionally good at frontend development and a crazy player in e-sport.
						</div>
					</div>
					{/* SLIDE END */}
					{/* SLIDE START */}
					<div className="text-black flex items-center flex-col px-[25px] md:px-[50px] py-[50px]">
						<div className="mb-[25px]">
							<img
								src="https://i.pravatar.cc/300"
								className="w-[80px] h-[80px] max-w-[80px] rounded-full"
							/>
							<div className="font-bold">Mafia Gaming</div>
							<div
								className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
								ex-teammate@playground
							</div>
						</div>
						<div
							className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
							I've been playing games for years and have come across some incredibly talented gamers, but
							there's one who stands out above the rest, ZAID. He has an almost supernatural ability to
							anticipate his opponents' moves and react in the blink of an eye. Watching him play is like
							watching a work of art unfold before your eyes.
						</div>
					</div>
					{/* SLIDE END */}
				</Carousel>
			</Div>
			{/* CAROUSEL END */}
		</Wrapper>
	</div>);
};

export default Testimonials;
