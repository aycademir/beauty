import React from 'react'
import style from "@/styles/Home1.module.css"

const Home1 = () => {
  return (
    <div class={style.main}>
        <div class={style.text}>
            <p className={style.title}>Lorem ipsum dolor sit amet</p>
            <p className={style.subtitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, voluptatibus eligendi delectus harum molestias quis perspiciatis eius, magni culpa at dolor ipsa exercitationem esse perferendis ratione dolores officiis consequuntur vel!</p>
        </div>

        <div class={style.text}>
            <p className={style.title}>Magni culpa at dolor ipsa</p>
            <p className={style.subtitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam reiciendis quas dolores odio, sunt vitae dolore. Repellat aut adipisci labore nisi eveniet quasi dolores? Molestiae, qui. Tenetur odio nihil aliquid.</p>
        </div>

        <div class={style.text}>
            <p className={style.title}>Voluptate voluptatibus eligendi</p>
            <p className={style.subtitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi aut, ipsum doloremque iure rem dolor, impedit quidem delectus quibusdam, quaerat error accusamus et aliquid eveniet. Molestias fuga itaque saepe omnis.</p>
        </div>
    </div>
  )
}

export default Home1