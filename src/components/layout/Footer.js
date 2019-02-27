import React, { Component } from "react";

// import { Container } from './styles';

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small special-color-dark darken-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 py-5">
              <div className="mb-5 flex-center">
                <a
                  className="fb-ic"
                  href="https://www.facebook.com/Arthur.Grigoletto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>
                <a
                  className="git-ic"
                  href="https://github.com/arthurgrigoletto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>
                <a
                  className="li-ic"
                  href="https://www.linkedin.com/in/arthur-grigoletto-49130446/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>
                <a
                  className="ins-ic"
                  href="https://www.instagram.com/arthurgrigoletto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">
          © 2018 Copyright: Arthur Grigoletto
        </div>
      </footer>
    );
  }
}
