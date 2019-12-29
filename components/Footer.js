const Footer = () => (
  <footer className="footer">
  	<p className="attribute">&copy; <a href="https://andydev.co.uk" rel="author developer">Andrew Yates</a>, <a href="https://andyhiggs.uk/" rel="author designer">Andy Higgs</a>, <a href="https://sijobling.com" rel="author developer">Si Jobling</a> &amp; <a href="http://abitgone.co.uk/" rel="author">Ant Williams</a> 2020</p>
  	<p>We’re on <a href="https://twitter.com/f1cal" className="twitter">Twitter</a> · Open Sourced on <a href="https://github.com/sportstimes/f1">GitHub</a></p>
  	<p> A ‘KickOff’ Production · V2.0a</p>
	<style jsx>{`
		.footer {
			margin: 20px 0 20px 0;
		}
		p { color: #aaa; font-size:12px; text-align:center; }
		p a { color: #ccc; text-decoration:none; }
	`}</style>
  </footer>
);

export default Footer;