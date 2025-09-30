import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 mt-12 border-t">
      <div className="max-w-screen-lg mx-auto px-4 py-12 grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="font-bold mb-2">West Lafayette Korea</h3>
          <ul className="space-y-1">
             <li><a href="#" target="_blank" rel="noopener noreferrer">What is West Lafayette Korea?</a></li>
             <li><a href="#" target="_blank" rel="noopener noreferrer">What is Team OZ?</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Useful Links</h3>
          <ul className="space-y-1">
            <li><a href="https://purdueka.org/" target="_blank" rel="noopener noreferrer">Purdue Korea Association (PKA)</a></li>
             <li><a href="https://open.kakao.com/o/gV31nLrh" target="_blank" rel="noopener noreferrer">카카오 오픈채팅방</a></li>
          </ul>
        </div>
        {/* <div>
          <h3 className="font-bold mb-2">Support</h3>
          <ul className="space-y-1">
            <li>Contact</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Legal</h3>
          <ul className="space-y-1">
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div> */}
      </div>
      <p className="text-center text-xs text-gray-400 pb-4">&copy; 2025. West Lafayette Korea. All rights reserved.</p>
    </footer>
  );
};

export default Footer;