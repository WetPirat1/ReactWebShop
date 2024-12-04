import React from 'react'

export default function Header() {
    return (
        <header>
            <div>
                <span clasName='logo'>House Staff</span>

                <ul className='nav'>
                    <li>Про нас</li>
                    <li>Контакты</li>
                    <li>Кабинеты</li>
                </ul>
            </div>
            <div className='presentation'></div>
        </header>
    )
}
