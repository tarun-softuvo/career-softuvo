import React from 'react'
import images from "../../data/imageUpload";
import Blog from "../../components/blogs";
import Header from "../../components/header";
import Footer from "../../components/footer";
function EmployeeContribution() {
  return (
    <div>
        <Header/>
      <section class="banner banner--employeeContributions">
            <div class="banner__commonBanner">
                <div class="commonPY">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-5 alignCenter">
                                <div>
                                    <h1>Employee Contributions</h1>
                                    <p>A bunch of “Creative Thinkers”! That’s what our team has always been about! Apart
                                        from showcasing their exquisite technical skills, they are a powerhouse of
                                        talent, you’ll find nowhere else! </p>
                                </div>
                            </div>
                            <div class="col-md-7 text-end">
                                <img src={images["employee-contribution-banner.svg"]} alt="Employee Contribution Banner"
                                    class="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="employeeContributions commonPY">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 sectionContent">
                        <h2>Empolyee Contribution</h2>
                        <p>There is a hidden talent in everyone! Let’s have a look at the secret skills of our
                            employees!</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="employeeContributions__inner">
                            <div class="employeeContributions__inner__innerBorderBig">
                                <div class="employeeContributions__inner__innerBorderSmall">
                                    <p>
                                        A boy and a girl were playing together. The boy had a collection of marbles. The
                                        girl had some sweets with her. The boy told the girl that he will give her
                                        sweets. The girl agreed. The body kept the biggest and the most beautiful
                                        marbles aside and gave the rest to the girl. The girl gave him all her sweets as
                                        she had promised. That night, the girl slept peacefully. But the boy couldnt
                                        sleep as he kept wondering if the girl had hidden some sweets from him the way
                                        he had hidden his best marbles.<br/>
                                        Moral of the story: If you don't give your hundred percent in a relationship,
                                        youll always keep doubting if the other person has given his/her hundred
                                        precent. This is applicable for any relationship like love, employer-employee
                                        relationship etc.
                                        Give your hundred precent to everything you do and sleep peacefully


                                    </p>
                                    <p>
                                        BY: Ritika Mehra
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="employeeContributions__inner">
                            <div class="employeeContributions__inner__innerBorderBig">
                                <div class="employeeContributions__inner__innerBorderSmall">
                                    <p>
                                        Ae kagaz batane chli hu khani apni<br/>
                                        Tere reshmi badan pr chlane lgi hu talwar apni,<br/>
                                        Ek ladke se ho gayi mohabbat mujhe,<br/>
                                        Ae khuda kaise karu shukriyada tuhje,<br/>
                                        ab s ke sath jeena aur usi ke sath marna hai mujhe.<br/>
                                        Ae zindagi tu hai meri, pr krna hai uske name tuhje<br/>
                                        Ae kagaz btane chali hu khani apni...<br/>
                                        Chla gya vo mujhe todh ke,<br/>
                                        Sunsaan rastepe akela chod ke,<br/>
                                        Ab na jee paungi uske bina,<br/>
                                        Na reh paungi uske bina<br/>
                                        Kiya usne mere stah aisa, jisne samjha
                                        tha lkuda apna, nikla vo shaitan jaisa

                                        Ae kagaz batane clhi hu khani apni...<br/>
                                        Ab na uska khayal ata hai, aur na ratto ko vo stata hai,<br/>
                                        smay ke sath sab badal gaya...<br/>
                                        Ae kagaz batni mene khani apni,<br/>
                                        likh diya tere badan par khani appni

                                    </p>
                                    <p>
                                        BY: Rishab
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="employeeShayaris">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="employeeShayaris__left">
                            <img src={images["employeeArt.svg"]} alt="Employees Art" class="img-fluid"/>
                            <div class="employeeShayaris__left__empName">
                                <p>By - Ritika</p>
                            </div>
                            <div class="employeeShayaris__left__empName employeeShayaris__left__empName--empName2">
                                <p>By - Manpreet</p>
                            </div>
                            <div class="employeeShayaris__left__empName employeeShayaris__left__empName--empName3">
                                <p>By - Manpreet</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="employeeShayaris__right">
                            <div class="employeeShayaris__right__bg">
                                <p>
                                    Hui zindagi haseen yaaron ke sang…
                                    bhare jinhone har tarah k rang...
                                    Kuch bane developer..
                                    koi ban gaye lawyer...
                                    aur kuch reh gye hum jese
                                    shayar…
                                    Na hote dost toh life thi fikki...
                                    kuch mere jesi shaant aur kuch hai tikhi…
                                    kuch bni hai tester bas issue hi nikale..
                                    hum jese developer ko fir mushkil me daale…
                                    kuch senior hai ese bilkul dost ho jese...
                                    aur kuch hai kanjoos jra kharche na paise...
                                    Jo bhi hai jesi hai ye yaaron ki yaari hai...
                                    Koi kuch bhi kahe yeh Hume sabse pyaari hai
                                </p>
                                <h5>By - Manpreet</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <h1>Shayari...</h1>

                        <div class="employeeShayaris__more">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="employeeShayaris__more__inner">
                                        <img src={images["quote-brown-left.svg"]} class="img-fluid" alt="Quote Left"/>
                                        <p>Kuch aise hai jazzbaat mere..
                                            na likh sakta hu, na hi padh sakta hu,
                                            koi de de pathar mujhe agar,
                                            use ek murat mein ghadh sakta hu,
                                            baand de zanjeeron mein koi,
                                            kar de mujhe mujse alag,
                                            mai tab bhi aage badh sakta hu,
                                            Kuch aise hai jazzbaat mere..
                                            na likh sakta hu, na hi padh sakta hu,
                                            khtam hone ko ho Saans yeh,
                                            paas na rahe koi bhi hall,
                                            mai tab bhi Parvat Chadh sakta hu,
                                            dharmo mein Fasien hai sab,
                                            insaniyat ke liye kar aage apni dhadh
                                            sakta hu,
                                            Kuch aise hai jazzbaat mere..
                                            na likh sakta hu, na hi padh sakta hu,
                                            jooth bhut aasaan hai,
                                            satya ke liye slaakho mein sadh
                                            sakta hu,
                                            Yudh Chidha ghamasaan yeh,
                                            tum sath dena ja nhi, mai khud hi
                                            sab se ladh sakta hu,
                                            Kuch aise hai jazzbaat mere..
                                            na likh sakta hu, na hi padh sakta hu,
                                            <img src={images["line.svg"]} class="img-fluid float-end mt-3"
                                                alt="Border Line"/>
                                            <span>
                                                By - <span>Itender Minhas</span>
                                            </span>
                                        </p>
                                        <img src={images["quote-brown-right.svg"]}
                                            class="img-fluid float-end employeeShayaris__more__inner__quoteRight"
                                            alt="Quote Right"/>

                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="employeeShayaris__more__inner">
                                        <img src={images["quote-brown-left.svg"]} class="img-fluid" alt="Quote Left"/>
                                        <p>Ae kagaz btane chli hu khani apni,
                                            Tere reshmi badan pr chlane lgi hu
                                            talwar apni,
                                            Ek ladke se ho gayi mohabbat mujhe,
                                            Ae khuda kaise karu shukriyada tujhe,
                                            ab us ke sath jeena aur usi ke sath
                                            marna hai mujhe.
                                            Ae zindagi tu hai meri, pr krna hai uske
                                            name tujhe
                                            Ae kagaz btane chali hu khani apni....
                                            Chla gya vo mujhe todh ke,
                                            Sunsaan raste pe akela chod ke,
                                            Ab na jee paungi uske bina,
                                            Na reh paungi uske bina,
                                            Kiya usne mere sath aisa, jise samjha
                                            tha khuda apna, nikla vo shaitan jaisa
                                            Ae kagaz btane chli hu khani apni....
                                            Ab na uska khyal ata hai, aur ratto ko vo
                                            stata hai,
                                            Smay ke sath sab badal gaya,
                                            Mile kuch dost aur ashiyan banta gaya...
                                            Ae kagaz btadi mene khani apni,
                                            Likh diya tere badan par kahani apni
                                            <img src={images["line.svg"]} class="img-fluid float-end mt-3"
                                                alt="Border Line"/>
                                            <span>
                                                By - <span>Rishab</span>
                                            </span>
                                        </p>
                                        <img src={images["quote-brown-right.svg"]}
                                            class="img-fluid float-end employeeShayaris__more__inner__quoteRight"
                                            alt="Quote Right"/>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="crazyCoding commonPY">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="crazyCoding__left">
                            <h2>Crazy Coding</h2>
                            {/* <h2>"hmo</h2> */}

                            <img src={images["crazy-coding.svg"]} alt="Crazy Coding" class="img-fluid"/>
                            <p class="text-end">By - <span>Satyandra Shakya</span></p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="crazyCoding__right">
                            <div class="crazyCoding__right__shayariPurpleBg">
                                <p>When the Outside Is Dark, People’s
                                    Yelling and Dog’s loudly Bark,
                                    Just Believe n sense your inside Spark,
                                    It’s only you to change, others will get<br/>
                                    engage;<br/>
                                    It’s only you do big bang, chosen for
                                    final revenge,<br/>
                                    A little tussle n all going to end,
                                    Trust you, your glory song people would
                                    sang,<br/>
                                    It’s just you to change, try for a big<br/>
                                    bang...<br/>
                                    Kuch aise hai jazzbaat mere..
                                    na likh sakta hu, na hi padh sakta hu,
                                    koi de de pathar mujhe agar,
                                    use ek murat mein ghadh sakta hu,
                                    baand de zanjeeron mein koi,
                                    kar de mujhe mujse alag,
                                    mai tab bhi aage badh sakta hu,
                                    Kuch aise hai jazzbaat mere..
                                    na likh sakta hu, na hi padh sakta hu,
                                    khtam hone ko ho Saans yeh,
                                    paas na rahe koi bhi hall</p>
                                <h5>
                                    By - <span>Itender</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default EmployeeContribution
