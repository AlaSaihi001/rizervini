import React from 'react'

export default function Footer() {
    return (
        <div>
        <footer>
                    <img src="/TUNISIA-Logo.png" width="200" alt="" />
                    <p>
                        Copyright by <br />
                        <span>
                        <i className="fa-solid fa-crown"></i>Ala Eddine Saihi<br />
                        <i className="fa-solid fa-crown"></i>Jawaher Fakraoui<br />
                        <i className="fa-solid fa-crown"></i>Rihab Dakhlaoui<br />
                        <i className="fa-solid fa-crown"></i>Sarra Ouni<br />
                        </span>
                    </p>
                    <div className="social-icon">
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-solid fa-envelope"></i>
                    </div>
                </footer>
        </div>
    )
}
