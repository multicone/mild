import cxc from 'assets/linear-sky.png'
import { Container } from 'components'
import { Link } from 'react-router-dom'
import { MdVerified } from 'react-icons/md'
import { BiCopy } from 'react-icons/bi'
import { FaEthereum } from 'react-icons/fa'
import { FiEdit3, FiUser } from 'react-icons/fi'
import CopyToClipboard from 'react-copy-to-clipboard'

interface InfoProps {
    className?: string
}

export const Info = ({ className }: InfoProps) => {
    return (
        <Container>
            <div className={`relative flex flex-col overflow-hidden rounded-3xl transition-shadow ${className}`}>
                <div className="relative flex-shrink-0 lg:h-60">
                    <img className="flex h-full w-full flex-shrink-0 rounded-3xl overflow-hidden" src={cxc} alt="" />
                </div>

                <div className="pb-5 px-4 pt-1.5">
                    <div className="text-center relative flex items-center justify-center ">
                        <div className="relative">
                            <svg
                                className="scale-[1.6] mx-auto h-14 -mt-[40px] text-shallow-deep -z-0"
                                width="134"
                                height="54"
                                viewBox="0 0 134 54"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M101.734 19.8581C99.2658 17.4194 96.9737 14.8065 94.5052 12.1935C94.1526 11.671 93.6237 11.3226 93.0947 10.8C92.7421 10.4516 92.5658 10.2774 92.2131 9.92903C85.6895 3.83226 76.6974 0 67 0C57.3026 0 48.3105 3.83226 41.6105 9.92903C41.2579 10.2774 41.0816 10.4516 40.7289 10.8C40.2 11.3226 39.8474 11.671 39.3184 12.1935C36.85 14.8065 34.5579 17.4194 32.0895 19.8581C23.2737 28.7419 11.4605 30.4839 -0.176331 30.8323V54H16.3974H32.0895H101.558H110.197H134V30.6581C122.363 30.3097 110.55 28.7419 101.734 19.8581Z"
                                    fill="currentColor"
                                />
                            </svg>

                            <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                                <img src='https://avatars.githubusercontent.com/u/46004116?v=4' className="w-14 h-14 text-2xl scale-[1.7] rounded-full border-white border-2" alt="" />
                            </div>

                            <div className="w-contain mx-auto flex flex-col items-center justify-center my-8">
                                <h2 className={`text-4xl font-medium flex items-center gap-1 text-white translate-y-2`}>
                                    <span className="">
                                        Anna
                                    </span>
                                    <MdVerified className='text-blue-400 text-3xl' />
                                </h2>
                                <span className={`flex translate-y-5 text-sm gap-3`}>
                                    <div className="flex items-center gap-0.5">
                                        <span className='text-white'><FaEthereum /></span>
                                        <CopyToClipboard text='0xefg...gjDe'>
                                            <span className="flex gap-2 items-center justify-center bg-shallow-dark border border-gray-700 px-3 py-2 rounded-2xl">
                                                <span className='pre text-gray-400'>0xefg...gjDe</span>
                                                <span className='text-shallow-sky'><BiCopy /></span>
                                            </span>
                                        </CopyToClipboard>
                                    </div>
                                    <div className="flex items-center gap-0.5">
                                        <span className='text-white'><FiUser /></span>
                                        <span className="flex gap-2 items-center justify-center bg-shallow-dark border border-gray-700 px-3 py-2 rounded-2xl">
                                            <span className='text-gray-400'>Edit profile</span>
                                            <span className='text-shallow-sky'><FiEdit3 /></span>
                                        </span>
                                    </div>
                                </span>
                                <svg className='text-whtie opacity-5 -mt-[174px]' width="328" height="215" viewBox="0 0 328 215" fill="white" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M218.471 31.2581L219.18 30.5536L219.173 30.5467L218.471 31.2581ZM211.02 23.4238L210.285 24.1016L210.285 24.1016L211.02 23.4238ZM263.317 48L263.258 48.9983L263.288 49H263.317V48ZM67.554 48V49H67.5973L67.6404 48.9963L67.554 48ZM108.807 31.2581L108.104 30.5466L108.097 30.5536L108.807 31.2581ZM116.26 23.4203L115.525 22.7425L115.525 22.7425L116.26 23.4203ZM120.189 19.1935L119.487 18.4819L119.475 18.4941L119.463 18.5066L120.189 19.1935ZM122.395 17.0149L123.098 17.7264L123.098 17.7263L122.395 17.0149ZM122.41 17L121.708 16.2885L121.708 16.2886L122.41 17ZM123.799 15.629L123.126 14.8893L123.111 14.9031L123.096 14.9175L123.799 15.629ZM203.479 15.629L204.182 14.9175L204.172 14.9078L204.162 14.8983L203.479 15.629ZM204.867 17L204.164 17.7115L204.164 17.7115L204.867 17ZM205.722 17.7795L206.38 17.0263L206.38 17.0263L205.722 17.7795ZM206.156 18.1643L206.829 17.4247L206.156 18.1643ZM208.041 20.2075L208.772 19.5244L208.041 20.2075ZM219.173 30.5467C216.642 28.0467 214.227 25.4268 211.756 22.746L210.285 24.1016C212.751 26.7765 215.198 29.4312 217.768 31.9696L219.173 30.5467ZM263.376 47.0017C247.11 46.0457 231.293 42.7549 219.18 30.5536L217.761 31.9626C230.404 44.6982 246.845 48.0336 263.258 48.9983L263.376 47.0017ZM263.317 49H311V47H263.317V49ZM327 65V198H329V65H327ZM311 214H17V216H311V214ZM1 198V65H-1V198H1ZM17 49H67.554V47H17V49ZM108.097 30.5536C96.8697 41.8634 82.4589 45.7036 67.4676 47.0037L67.6404 48.9963C82.8364 47.6784 97.8062 43.759 109.516 31.9626L108.097 30.5536ZM115.525 22.7425C113.053 25.4246 110.636 28.0456 108.104 30.5466L109.509 31.9696C112.081 29.4301 114.529 26.7742 116.996 24.0981L115.525 22.7425ZM119.463 18.5066C118.123 19.9245 116.816 21.3417 115.525 22.7425L116.996 24.0981C118.288 22.6958 119.586 21.2877 120.916 19.8803L119.463 18.5066ZM121.693 16.3034C120.868 17.1178 120.315 17.6645 119.487 18.4819L120.892 19.9051C121.72 19.0875 122.274 18.5407 123.098 17.7264L121.693 16.3034ZM121.708 16.2886L121.693 16.3035L123.098 17.7263L123.113 17.7114L121.708 16.2886ZM123.096 14.9175L121.708 16.2885L123.113 17.7115L124.501 16.3405L123.096 14.9175ZM163.778 -1C148.243 -1 133.847 5.13633 123.126 14.8893L124.472 16.3688C134.85 6.92819 148.773 1 163.778 1V-1ZM204.162 14.8983C193.711 5.13509 179.31 -1 163.778 -1V1C178.784 1 192.702 6.92943 202.796 16.3598L204.162 14.8983ZM205.57 16.2885L204.182 14.9175L202.776 16.3405L204.164 17.7115L205.57 16.2885ZM206.38 17.0263C206.1 16.782 205.833 16.549 205.57 16.2885L204.164 17.7115C204.478 18.0214 204.789 18.2928 205.064 18.5326L206.38 17.0263ZM206.829 17.4247C206.68 17.289 206.527 17.1551 206.38 17.0263L205.064 18.5326C205.214 18.6639 205.352 18.7843 205.484 18.904L206.829 17.4247ZM211.756 22.746C210.772 21.6791 209.78 20.6027 208.772 19.5244L207.311 20.8905C208.314 21.9628 209.301 23.0338 210.285 24.1016L211.756 22.746ZM1 65C1 56.1634 8.16344 49 17 49V47C7.05888 47 -1 55.0589 -1 65H1ZM17 214C8.16345 214 1 206.837 1 198H-1C-1 207.941 7.05888 216 17 216V214ZM327 198C327 206.837 319.837 214 311 214V216C320.941 216 329 207.941 329 198H327ZM205.484 18.904C205.784 19.1773 206.068 19.4854 206.368 19.8265C206.656 20.1545 206.981 20.5377 207.311 20.8905L208.772 19.5244C208.469 19.2008 208.194 18.874 207.869 18.5054C207.556 18.1499 207.214 17.7746 206.829 17.4247L205.484 18.904ZM311 49C319.837 49 327 56.1634 327 65H329C329 55.0589 320.941 47 311 47V49Z" mask="url(#path-1-inside-1_196_4865)" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}