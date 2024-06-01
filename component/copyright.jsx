import FindMe from './FIndMe';

import FacebookIcon from '@material-ui/icons/Facebook';
import TelegramIcon from '@material-ui/icons/Telegram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';
function CoppyRight() {
    return (
        <div>
            <div className="fixed bottom-10 z-0 p-3 md:p-0">
                <div className="flex justify-between px-10 m-auto">
                    <ul className="gap gap-y-4 grid">
                        <li> <b style={{ writingMode: 'vertical-rl' }}>Find me</b> </li>
                        <li>
                            <a href="https://www.facebook.com/profile.php?id=100037561217322" target="_blank" title="Kết nối với tôi bằng Facebook"><FacebookIcon /></a>
                        </li>
                        <li> <a href=""> <TelegramIcon /></a>  </li>
                        <li> <a href="https://wa.me/0986082324" target="_blank" title="Kết nối với tôi bằng Whatsapp">
                            <WhatsAppIcon />
                        </a>
                        </li>
                        <li title="minh0608197@gmail.com">
                            <EmailIcon />
                        </li>
                        <li >
                            <a href="https://www.facebook.com/messages/t/100037561217322" target="_blank" title="Kết nối với tôi bằng Messenger">
                                <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="-23 -21 682 682.66669" width="23px"><path d="m317.730469 0c-175.386719 0-317.5625 132.65625-317.5625 296.292969 0 92.660156 45.585937 175.394531 116.972656 229.722656v113.984375l106.574219-60.589844c29.714844 8.558594 61.289062 13.183594 94.015625 13.183594 175.394531 0 317.558593-132.667969 317.558593-296.296875 0-163.640625-142.164062-296.296875-317.558593-296.296875zm32.125 396.46875-81.4375-85.511719-155.859375 85.511719 171.253906-181.328125 82.199219 84.019531 154.128906-84.019531zm0 0" /></svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://join.skype.com/invite/iHqXa4jo5Y76" target="_blank" title="Kết nối với tôi bằng Skype">

                                <svg id="Bold" enableBackground="new 0 0 24 24"  viewBox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="m23.309 14.547c1.738-7.81-5.104-14.905-13.139-13.543-4.362-2.707-10.17.352-10.17 5.542 0 1.207.333 2.337.912 3.311-1.615 7.828 5.283 14.821 13.311 13.366 5.675 3.001 11.946-2.984 9.086-8.676zm-7.638 4.71c-2.108.867-5.577.872-7.676-.227-2.993-1.596-3.525-5.189-.943-5.189 1.946 0 1.33 2.269 3.295 3.194.902.417 2.841.46 3.968-.3 1.113-.745 1.011-1.917.406-2.477-1.603-1.48-6.19-.892-8.287-3.483-.911-1.124-1.083-3.107.037-4.545 1.952-2.512 7.68-2.665 10.143-.768 2.274 1.76 1.66 4.096-.175 4.096-2.207 0-1.047-2.888-4.61-2.888-2.583 0-3.599 1.837-1.78 2.731 2.466 1.225 8.75.816 8.75 5.603-.005 1.992-1.226 3.477-3.128 4.253z" /></svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="fixed bottom-10 z-0 p-3 md:p-0 right-10 ">
                <b className="bottom-0 ">
                    © Minh Nguyen
                </b>
            </div>
        </div>
    )
}

export default CoppyRight;