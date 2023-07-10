import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import styles from '../SectionTestimonials/sectiontestimonials.module.css';

function SectionTestimonials(){
    return <section className={styles.section}>
        <div className={styles.content}>
            <h2>What they´ve said</h2>
            <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={
                        {
                            640: {
                                width: 640,
                                slidesPerView: 2,
                            },
                            // when window width is >= 768px
                            768: {
                                width: 768,
                                slidesPerView: 3,
                                spaceBetween:40,
                            },
                            
                        }
                    }
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                <SwiperSlide>
                    <article className={styles.containerAvatar}>
                        <div >
                            <img src="imagenes/avatar-anisha.png" alt="Anisha Li"/>
                        </div>
                        <h4>Anisha Li</h4>
                        <p>Manage has supercharged our team`s workflow.The ability to maintain visibility on larger milestones at all times keeps eveyone motivated</p>
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                        <article className={styles.containerAvatar}>
                            <div >
                                <img src="imagenes/avatar-ali.png" alt="Anisha Li"/>
                            </div>
                            <h4>Ali Bravo</h4>
                            <p>We Have been able to cancel so many other subcriptions since using Manage.There is no more cross-channel confusion and everyone is much more focused.</p>
                        </article>
                </SwiperSlide>
                <SwiperSlide>
                    <article className={styles.containerAvatar}>
                        <div>
                            <img src="imagenes/avatar-richard.png" alt="Anisha Li"/>
                        </div>
                        <h4 >Richard Watts</h4>
                        <p>Manage allows us to provide structure and process.It keeps us organized and focused. I can`t stop recommending them to everyone i talk to!</p>
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                    <article className={styles.containerAvatar}>
                        <div>
                            <img src="imagenes/avatar-shanai.png" alt="Anisha Li"/>
                        </div>
                        <h4>Shanai Gough</h4>
                        
                        <p>Their software allows us to track, manage collaborate on our projects from anywhere.it keeps the whole team in-sync without being intrusive.</p>
                    </article>
                </SwiperSlide>
            </Swiper>
            <button className="btn-started">Get Started</button>
        </div>
    </section>
}
export default SectionTestimonials;
