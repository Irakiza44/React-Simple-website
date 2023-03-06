import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import Didier from './Didier.png';

class Footer extends Component {

    render() {
        return (
            <footer class="bg-blue-700 shadow  text-white p-2 border-t">
                <div class="container py-6 px-4 text-center mx-auto ">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class=" hover:scale-105 shadow-lg shadow-yellow-900 bg-yellow-600  p-4">
                           
                            <div class=" flex justify-center space-x-2 "><img src={Didier} alt="didier" class="shadow-blue-900 shadow-lg rounded-full  ring-2 ring-blue-600 object-cover h-10 w-10" />

                                <span class="text-[20px] font-bold text-black">
                                    <span class="">L</span><span class="text-yellow-500">O</span>GO
                                </span>

                            </div>
                        </div>
                        <div class="hover:scale-105 shadow-lg shadow-yellow-900 bg-yellow-600 p-4 space-x-4">
                            <h2 class="text-lg font-medium  mb-4 text-center text-lg text-[23px] text-black">Reach Me Here</h2>
                            <SocialIcon url="https://twitter.com/DidierIrakiza" />
                            <SocialIcon url="https://web.facebook.com/Irakiza7" />
                            <SocialIcon url="https://github.com/Irakiza44" />
                            <SocialIcon url="https://www.linkedin.com/in/didier-irakiza-184938230/" />
                            <SocialIcon url="https://www.youtube.com/channel/UCxxSddl_JAcuNvCMt2Z71Zg" />
                        </div>
                        <div class="hover:scale-105 shadow-lg shadow-yellow-900 bg-yellow-600  p-4">
                            <h2 class="text-lg font-medium  mb-4 text-center text-lg text-[23px] text-black" >Address</h2>
                            <ul class="text-[18px] text-black">
                                <li>Kigali-Rwanda</li>
                                <li>Gasabo</li>
                                <li>Tel: (+250)787921692</li>
                            </ul>

                        </div>
                    </div>
                </div>
                <p class=" text-lg font-medium text-center text-lg text-[23px] text-black">Copyright © 2023 Didier</p>
            </footer>
        );
    }
}

export default Footer;