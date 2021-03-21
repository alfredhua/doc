import React from 'react';
import ReactDOM from 'react-dom';
import { getScrollTop, getLink } from '../../../utils';
import Header from '../../components/header';
import Button from '../../components/button';
import Footer from '../../components/footer';
import Language from '../../components/language';
import homeConfig from '../../../site_config/home';
import blogConfig from '../../../site_config/blog';
import PageSlider from '../../components/pageSlider';
import BlogItem from '../blog/blogItem';

import './index.scss';
import '../blog/index.scss';

class Home extends Language {

  constructor(props) {
    super(props);
    this.state = {
      headerType: 'primary',
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const scrollTop = getScrollTop();
      if (scrollTop > 66) {
        this.setState({
          headerType: 'normal',
        });
      } else {
        this.setState({
          headerType: 'primary',
        });
      }
    });
  }

  render() {
    const language = this.getLanguage();
    const dataSource = homeConfig[language];
    const blogDataSource = blogConfig[language];
    const blogs = blogDataSource.list;
    const { headerType } = this.state;
    const headerLogo = headerType === 'primary' ? '/img/dubbo_white.png' : '/img/dubbo_colorful.png';
    return (
      <div className="home-page blog-list-page">
        <section className="top-section">
          <Header
            currentKey="home"
            type={headerType}
            logo={headerLogo}
            language={language}
            onLanguageChange={this.onLanguageChange}
          />
          <div className="vertical-middle">
            <div className="product-name">
              <h2>{dataSource.brand.brandName}</h2>
            </div>
            <p className="product-desc">{dataSource.brand.briefIntroduction}</p>
            <div className="button-area">
            {
              dataSource.brand.buttons.map(b => <Button type={b.type} key={b.type} link={b.link} target={b.target}>{b.text}</Button>)
            }
            </div>
          </div>
          <div className="animation animation1" />
          <div className="animation animation2" />
          <div className="animation animation3" />
          <div className="animation animation4" />
          <div className="animation animation5" />
        </section>

        <section className="blog-container">
          <div className="col col-18 left-part">
            <PageSlider pageSize={5}>
            {
              blogs.map((blog, i) => (
                <BlogItem key={i} dataSource={blog} />
              ))
            }
            </PageSlider>
          </div>
          <div className="col col-6 right-part">
            <h4>{dataSource.postsTitle}</h4>
            <ul>
            {
              blogs.map((blog, i) => (
                <li key={i}><a href={getLink(blog.link)} target={blog.target || '_self'}><span>{blog.dateStr}&nbsp;&nbsp;</span><span>{blog.title}</span></a></li>
              ))
            }
            </ul>
          </div>
        </section>

        {/* <section className="introduction-section">
          <div className="introduction-body">
            <div className="introduction">
              <h3>{dataSource.introduction.title}</h3>
              <p>{dataSource.introduction.desc}</p>
            </div>
            <img src={getLink(dataSource.introduction.img)} />
          </div>
        </section> */}

        <section className="start-section">
          <div className="start-body">
            <div className="left-part">
              <h3>{dataSource.start.title}</h3>
              <p>{dataSource.start.desc}</p>
              <a href={getLink(dataSource.start.button.link)} target={dataSource.start.button.link || '_self'}>{dataSource.start.button.text}</a>
              </div>
            <div className="right-part"><img src={getLink('/img/quick_start.png')} /></div>
          </div>
        </section>
        
        {/* <section className="feature-section">
          <h3>{dataSource.features.title}</h3>
          <ul>
          {
            dataSource.features.list.map((feature, i) => (
              <Item feature={feature} key={i} />
            ))
          }
          </ul>
        </section> */}
       
        {/* <section className="users-section">
          <h3>{dataSource.users.title}</h3>
          <p>{dataSource.users.desc}</p>
          <div className="users">
          {
            dataSource.users.list.map((user, i) => (
              <img src={getLink(user)} key={i} />
            ))
          }
          </div>
        </section> */}
        <Footer logo="/img/dubbo_gray.png" language={language} />
      </div>
    );
  }
}

document.getElementById('root') && ReactDOM.render(<Home />, document.getElementById('root'));

export default Home;
