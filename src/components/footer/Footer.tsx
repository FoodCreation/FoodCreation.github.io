import React from 'react'
import FooterText from './FooterText'

export default function Footer() {
    return (
        <footer className="footer footer-center p-10 bg-amber-400">
            <aside>
                <FooterText text="Food Creation Project"></FooterText>
                <FooterText text="Copyright © 2024 - All right reserved"></FooterText>
            </aside>
        </footer>
    )
}