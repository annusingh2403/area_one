import React, {useState, useEffect} from 'react';
import './Main.css';
import Slogan from './Slogans';
import bear from '../../../images/bear.avif';
import goat from '../../../images/goat.png';
import biodiesel from '../../../images/biodiesel.webp';
import health from '../../../images/health.jpg';

const Main = () => {

    const [msg, setMsg] = useState(false);
    const [position, setPosition] = useState([0,0])

    const [number, setNumber] = useState(0);
    const [slogan, setSlogan] = useState(Slogan);

    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const handleClick = (e) => {
        setMsg(!msg);
        setPosition([e.pageX,e.pageY])
        setNumber(randomNumber(0, 29))
    }
    

  return (
    <>
        <div>
            <div className='section-one'>
                <div className="msg-box-1" onClick={handleClick}>
                    {/* <div className={msg ? "" : "show-msg"}>{slogan} </div> */}
                    {msg && (
                        <div className={msg ? "show-msg" : "show-msg"} style={{
                        position: "absolute",
                        left: position[0],
                        top: position[1],
                        tranform: "translateX(-50%)",
                        transform: "translateY(-50%)",
                        }}>
                            {slogan[number]}
                        </div>
                    )}
                </div>
            </div>

            <div className="section-two">
                <h2>Fun and interesting facts about coffee</h2>

                <div className="facts">
                    <div>
                        <h4> ♪ Second in the world ♪</h4>
                        <p>♪ It’s the world’s 2nd largest traded commodity.  Crude oil is first. Yes, it is not a typo. Coffee is consumed in great quantities, making it the most beloved beverage after water. It’s worth is over $100 billion worldwide.</p>
                    </div>
                    <div className='facts-images'>
                        <img src="https://media.istockphoto.com/id/1401695143/photo/world-map-from-roasted-coffee-beans-on-a-white-background-coffee-consumption-around-the-world.jpg?s=612x612&w=0&k=20&c=FRFmeLGroSaFCE46UP5mpj5WbpPNvEF0E5z6jOuWIJ8=" alt="" />
                    </div>
                </div>

                <div className="facts">
                    <div className='facts-images'>
                        <img src="https://blog.ipleaders.in/wp-content/uploads/2019/05/cap-p.jpg" alt="" />
                    </div>
                    <div>
                        <h4> ♪ Drinking coffee was once punishable by death ♪</h4>
                        <p>♪ During the 17th century Ottoman Empire, it was believed that coffee contained mind-altering effects. The ruler of this period believed it to be a type of narcotic and banned it from public consumption.</p>
                    </div>
                </div>

                <div className="facts">
                    <div>
                        <h4> ♪ Coffee helped Olympic athletes ♪</h4>
                        <p>♪ Brazil couldn’t afford to send its athletes to Los Angeles  for the 1932 Olympics, so the government loaded them in a ship full of coffee which was sold on the way to finance their trip.</p>
                    </div>
                    <div className='facts-images'>
                        <img src="https://cdn.shopify.com/s/files/1/1783/0163/articles/runner-coffee_1024x1024.jpg?v=1641759041" alt="" />
                    </div>
                </div>

                <div className="facts">
                    <div className='facts-images'>
                        <img src="https://media.istockphoto.com/id/1169554559/photo/a-splash-of-coffee-with-milk-in-a-cup.jpg?s=612x612&w=0&k=20&c=LHSjCzwTo_ME33LjZzSAr91U4Jg0ofS4EHRvCeRLsEU=" alt="" />
                    </div>
                    <div>
                        <h4> ♪ Add cream, keep your coffee warm ♪</h4>
                        <p>♪ Coffee stays warm 20% longer when you add cream.</p>
                    </div>
                </div>

                <div className="facts">
                    <div>
                        <h4> ♪ Divorce because of lack of coffee ♪</h4>
                        <p>♪ In 16th century Constantinople, not providing your wife with enough coffee was grounds for divorce</p>
                    </div>
                    <div className='facts-images'>
                        <img src="https://png.pngtree.com/png-vector/20220712/ourmid/pngtree-divorce-couple-dissolution-angry-quarrel-png-image_5933776.png" alt="" />
                    </div>
                </div>

                <div className="facts">
                    <div className='facts-images'>
                        <img src="https://home.lamarzoccousa.com/wp-content/uploads/2020/10/johannaKindvall-in-the-kitchen-LOWRES.jpg" alt="" />
                    </div>
                    <div>
                        <h4> ♪ Italian “expresso” ♪</h4>
                        <p>♪ The word espresso comes from Italian and means “expressed” or “forced out”. Espresso is made by forcing very hot water under high pressure through finely ground, compacted coffee.</p>
                    </div>
                </div>

                <div className="facts">
                    <div>
                        <h4> ♪ The most expensive coffees are made from cat poop and elephant dung ♪</h4>
                        <p>♪ In the West, kopi luwak has become known as "cat poop coffee." With prices ranging between $35 and $100 a cup, or about $100 to $600 a pound, kopi luwak is widely considered to be the most expensive coffee in the world. </p>
                    </div>
                    <div className='facts-images'>
                        <img src="https://media.istockphoto.com/id/1201205537/vector/zoo.jpg?s=612x612&w=0&k=20&c=6SeFFokZgNulnwMDcydeQ5RpCm22SO5DO-e3z4AuSUU=" alt="" />
                    </div>
                </div>

                <div className="facts">
                    <div className='facts-images'>
                        <img src={bear} alt="bear dring man" />
                    </div>
                    <div>
                        <h4> ♪ What did people drink in the morning before coffee ♪</h4>
                        <p>♪ Before coffee became popular in the United States, the breakfast drink of choice was cider or beer, even for children.</p>
                    </div>
                </div>

                <div className="facts">
                    <div>
                        <h4> ♪ Who discovered coffee ♪</h4>
                        <p>♪ It was said that coffee was discovered by a goat herder in Ethiopia in the 1500s.  He saw his goats eating coffee cherries. Afterwards, he observed a change in their behavior. They gained a high amount of energy and they didn’t sleep at night.  The herder shared his findings with local monks and then after they made a drink with coffee beans, they realized they could stay up all night and pray. Then, they spread the word to other Ethiopian monks and it reached across the civilized world.</p>
                    </div>
                    <div className='facts-images'>
                        <img src={goat} alt="" />
                    </div>
                </div>

                <div className="facts">
                    <div className='facts-images'>
                        <img src={biodiesel} alt="" />
                    </div>
                    <div>
                        <h4> ♪ Biodiesel anyone ♪</h4>
                        <p>♪ Scientists are turning the oil from waste ground coffee into biodiesel, so one day coffee may be fuelling your car.</p>
                    </div>
                </div>

                <div className="facts">
                    <div>
                        <h4> ♪ Coffee has health benefits ♪</h4>
                        <p>♪ Regularly drinking coffee may have health benefits such as reduced risk of illnesses like cancer, heart disease and Alzheimer's.</p>
                    </div>
                    <div className='facts-images'>
                        <img src={health} alt="" />
                    </div>
                </div>

                <div className="facts">
                    <div className='facts-images'>
                        <img src="https://media.istockphoto.com/id/146812533/photo/coffee-map-made-of-beans.jpg?s=170667a&w=0&k=20&c=d3xnzJbdNv4V6uOT7JtkzcDEq36uEJWDBvLRMg4dI9I=" alt="" />
                    </div>
                    <div>
                        <h4> ♪ How much coffee does the world drink a day ♪</h4>
                        <p>♪ Globally people consume about 2.25 billion cups of coffee every day.</p>
                    </div>
                </div>

                <div className="facts">
                    <div>
                        <h4> ♪ Feeling glum ♪</h4>
                        <p>♪ Studies have shown that drinking coffee may lower your risk of depression.</p>
                    </div>
                    <div className='facts-images'>
                        <img src="https://static.vecteezy.com/system/resources/previews/004/785/170/non_2x/depressed-sad-woman-illustration-concept-free-vector.jpg" alt="" />
                    </div>
                </div>

                <div className="facts">
                    <div className='facts-images'>
                        <img src="https://media.istockphoto.com/id/1365361773/vector/girl-is-holding-to-a-giant-cup-of-coffee.jpg?s=612x612&w=0&k=20&c=IkFVaZLHn3U4kn8BXWHado6zfrTG6AzNKn9AzbIlEA4=" alt="" />
                    </div>
                    <div>
                        <h4> ♪ Biggest cup of coffee ♪</h4>
                        <p>♪ The largest cup of coffee contains 22,739.14 litres (5,001.91 UK gal; 6,007.04 US gal), and was created by Alcaldía Municipal de Chinchiná (Colombia) at Parque de Bolívar, Chinchiná, Caldas, Colombia on 15 June 2019.</p>
                    </div>
                </div>

                <div className="facts">
                    <div>
                        <h4> ♪ Brazil grows the most coffee in the world. ♪</h4>
                        <p>♪ Today, Brazil produces about third of the world's supply, according to the International Coffee Organization, about twice as much as the second place holder, Vietnam.</p>
                    </div>
                    <div className='facts-images'>
                        <img src="https://t4.ftcdn.net/jpg/00/79/16/03/360_F_79160375_119UHYTkL9RSk2venzcwA7s1tg5E0Ymr.jpg" alt="" />
                    </div>
                </div>

                
            </div>
        </div>
    </>
  )
}

export default Main
