import _ from "lodash";
import React from "react";
import "./App.css";
import ImageBox from "./components/ImageBox";
import Container from "./components/Container";

class App extends React.Component {
  componentDidMount() {
    const items = [
      {
        title: "Canon eos 300 Canon EF 28-90 4-5.6 Kodak Color 200",
        link: "https://www.flickr.com/photos/171385373@N02/48035664556/",
        media: {
          m: "https://live.staticflickr.com/65535/48035664556_8f4e887d0a_m.jpg"
        },
        date_taken: "2019-06-10T00:53:42-08:00",
        description:
          ' <p><a href="https://www.flickr.com/people/171385373@N02/">verakirichenko2000</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/171385373@N02/48035664556/" title="Canon eos 300 Canon EF 28-90 4-5.6 Kodak Color 200"><img src="https://live.staticflickr.com/65535/48035664556_8f4e887d0a_m.jpg" width="240" height="160" alt="Canon eos 300 Canon EF 28-90 4-5.6 Kodak Color 200" /></a></p> ',
        published: "2019-06-10T09:36:28Z",
        author: 'nobody@flickr.com ("verakirichenko2000")',
        author_id: "171385373@N02",
        tags: ""
      },
      {
        title: " ",
        link: "https://www.flickr.com/photos/kadide/48035664751/",
        media: {
          m: "https://live.staticflickr.com/65535/48035664751_69cb574859_m.jpg"
        },
        date_taken: "2019-03-10T08:24:50-08:00",
        description:
          ' <p><a href="https://www.flickr.com/people/kadide/">webdill62</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/kadide/48035664751/" title=" "><img src="https://live.staticflickr.com/65535/48035664751_69cb574859_m.jpg" width="180" height="240" alt=" " /></a></p> ',
        published: "2019-06-10T09:36:30Z",
        author: 'nobody@flickr.com ("webdill62")',
        author_id: "25499732@N00",
        tags: ""
      },
      {
        title: "DSC_2551-38.jpg",
        link: "https://www.flickr.com/photos/livny/48035665416/",
        media: {
          m: "https://live.staticflickr.com/65535/48035665416_e5b23447f2_m.jpg"
        },
        date_taken: "2019-06-10T00:13:21-08:00",
        description:
          ' <p><a href="https://www.flickr.com/people/livny/">Rami livny</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/livny/48035665416/" title="DSC_2551-38.jpg"><img src="https://live.staticflickr.com/65535/48035665416_e5b23447f2_m.jpg" width="240" height="160" alt="DSC_2551-38.jpg" /></a></p> ',
        published: "2019-06-10T09:36:39Z",
        author: 'nobody@flickr.com ("Rami livny")',
        author_id: "134377821@N04",
        tags: ""
      },
      {
        title: "IMG_0447",
        link: "https://www.flickr.com/photos/bacosa/48035665871/",
        media: {
          m: "https://live.staticflickr.com/65535/48035665871_fb77fdb708_m.jpg"
        },
        date_taken: "2019-04-27T06:31:14-08:00",
        description:
          ' <p><a href="https://www.flickr.com/people/bacosa/">Loux23</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/bacosa/48035665871/" title="IMG_0447"><img src="https://live.staticflickr.com/65535/48035665871_fb77fdb708_m.jpg" width="240" height="160" alt="IMG_0447" /></a></p> ',
        published: "2019-06-10T09:36:45Z",
        author: 'nobody@flickr.com ("Loux23")',
        author_id: "38974188@N08",
        tags: ""
      },
      {
        title: "Fisherman village, Pantai Puteri Melaka",
        link: "https://www.flickr.com/photos/opit/48035666301/",
        media: {
          m: "https://live.staticflickr.com/65535/48035666301_eb02bec0d6_m.jpg"
        },
        date_taken: "2015-12-18T09:52:25-08:00",
        description:
          ' <p><a href="https://www.flickr.com/people/opit/">_Opit_</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/opit/48035666301/" title="Fisherman village, Pantai Puteri Melaka"><img src="https://live.staticflickr.com/65535/48035666301_eb02bec0d6_m.jpg" width="240" height="159" alt="Fisherman village, Pantai Puteri Melaka" /></a></p> ',
        published: "2019-06-10T09:36:51Z",
        author: 'nobody@flickr.com ("_Opit_")',
        author_id: "14175722@N05",
        tags: ""
      },
      {
        title: "James MacMillan with Scottish Chamber Orchestra",
        link: "https://www.flickr.com/photos/170289867@N08/48035707363/",
        media: {
          m: "https://live.staticflickr.com/65535/48035707363_4c6230c28b_m.jpg"
        },
        date_taken: "2019-02-21T21:31:19-08:00",
        description:
          ' <p><a href="https://www.flickr.com/people/170289867@N08/">wxnxubbb1</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/170289867@N08/48035707363/" title="James MacMillan with Scottish Chamber Orchestra"><img src="https://live.staticflickr.com/65535/48035707363_4c6230c28b_m.jpg" width="180" height="240" alt="James MacMillan with Scottish Chamber Orchestra" /></a></p> ',
        published: "2019-06-10T09:36:28Z",
        author: 'nobody@flickr.com ("wxnxubbb1")',
        author_id: "170289867@N08",
        tags: ""
      },
      {
        title: "Far.",
        link: "https://www.flickr.com/photos/168830354@N07/48035707818/",
        media: {
          m: "https://live.staticflickr.com/65535/48035707818_1cf85d88ec_m.jpg"
        },
        date_taken: "2019-06-09T18:37:43-08:00",
        description:
          ' <p><a href="https://www.flickr.com/people/168830354@N07/">Erdem Çolakoğlu</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/168830354@N07/48035707818/" title="Far."><img src="https://live.staticflickr.com/65535/48035707818_1cf85d88ec_m.jpg" width="180" height="240" alt="Far." /></a></p> ',
        published: "2019-06-10T09:36:33Z",
        author: 'nobody@flickr.com ("Erdem Çolakoğlu")',
        author_id: "168830354@N07",
        tags: ""
      },
      {
        title: "Moto_Cross_Alairac-00087-02062019.jpg",
        link: "https://www.flickr.com/photos/fabien_r/48035708428/",
        media: {
          m: "https://live.staticflickr.com/65535/48035708428_31bc9b2e94_m.jpg"
        },
        date_taken: "2019-06-02T12:29:53-08:00",
        description:
          ' <p><a href="https://www.flickr.com/people/fabien_r/">Fabien Ribet</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/fabien_r/48035708428/" title="Moto_Cross_Alairac-00087-02062019.jpg"><img src="https://live.staticflickr.com/65535/48035708428_31bc9b2e94_m.jpg" width="240" height="160" alt="Moto_Cross_Alairac-00087-02062019.jpg" /></a></p> ',
        published: "2019-06-10T09:36:39Z",
        author: 'nobody@flickr.com ("Fabien Ribet")',
        author_id: "97339784@N08",
        tags: "eos moto canon 40d alairac cross"
      },
      {
        title: "",
        link: "https://www.flickr.com/photos/jimmetcalfe/48035708608/",
        media: {
          m: "https://live.staticflickr.com/65535/48035708608_78463397b6_m.jpg"
        },
        date_taken: "2019-06-08T13:19:05-08:00",
        description:
          ' <p><a href="https://www.flickr.com/people/jimmetcalfe/">jim metcalfe</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/jimmetcalfe/48035708608/" title=""><img src="https://live.staticflickr.com/65535/48035708608_78463397b6_m.jpg" width="159" height="240" alt="" /></a></p> ',
        published: "2019-06-10T09:36:42Z",
        author: 'nobody@flickr.com ("jim metcalfe")',
        author_id: "33778676@N07",
        tags: ""
      },
      {
        title: "On the balcony",
        link: "https://www.flickr.com/photos/9039141@N07/48035709323/",
        media: {
          m: "https://live.staticflickr.com/65535/48035709323_166216b10d_m.jpg"
        },
        date_taken: "2019-06-09T18:46:51-08:00",
        description:
          ' <p><a href="https://www.flickr.com/people/9039141@N07/">kpmue</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/9039141@N07/48035709323/" title="On the balcony"><img src="https://live.staticflickr.com/65535/48035709323_166216b10d_m.jpg" width="160" height="240" alt="On the balcony" /></a></p> <p></p>',
        published: "2019-06-10T09:36:52Z",
        author: 'nobody@flickr.com ("kpmue")',
        author_id: "9039141@N07",
        tags: ""
      },
      {
        title: "IMG_2584",
        link: "https://www.flickr.com/photos/181745740@N08/48035709448/",
        media: {
          m: "https://live.staticflickr.com/65535/48035709448_82159098f8_m.jpg"
        },
        date_taken: "2019-06-08T16:53:31-08:00",
        description:
          ' <p><a href="https://www.flickr.com/people/181745740@N08/">Kẻ Theo Đuổi Ánh Sáng</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/181745740@N08/48035709448/" title="IMG_2584"><img src="https://live.staticflickr.com/65535/48035709448_82159098f8_m.jpg" width="240" height="160" alt="IMG_2584" /></a></p> ',
        published: "2019-06-10T09:36:53Z",
        author: 'nobody@flickr.com ("Kẻ Theo Đuổi Ánh Sáng")',
        author_id: "181745740@N08",
        tags: ""
      },
      {
        title: "Along Anyang river, Seoul",
        link: "https://www.flickr.com/photos/thierrylaplanche/48035709653/",
        media: {
          m: "https://live.staticflickr.com/65535/48035709653_cd66f10db0_m.jpg"
        },
        date_taken: "2019-04-07T11:29:11-08:00",
        description:
          ' <p><a href="https://www.flickr.com/people/thierrylaplanche/">Thierry Laplanche</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/thierrylaplanche/48035709653/" title="Along Anyang river, Seoul"><img src="https://live.staticflickr.com/65535/48035709653_cd66f10db0_m.jpg" width="240" height="240" alt="Along Anyang river, Seoul" /></a></p> ',
        published: "2019-06-10T09:36:57Z",
        author: 'nobody@flickr.com ("Thierry Laplanche")',
        author_id: "149934780@N04",
        tags: ""
      },
      {
        title:
          "John Mueller's Answers to Negative SEO Attacks - #Backlinking, #ContentMarketing, #Google, #LinkBuilding, #LocalSEO, #LocalSEOTampa, #NegativeSEO, #OnlineReputationManagement, #OrganicSEO, #SEO, #SEOCompany, #SEOTips, #SERP - https://www.localseotampa.com",
        link: "https://www.flickr.com/photos/localseotampa/48035772457/",
        media: {
          m: "https://live.staticflickr.com/65535/48035772457_095a4e3860_m.jpg"
        },
        date_taken: "2019-06-10T02:36:33-08:00",
        description:
          ' <p><a href="https://www.flickr.com/people/localseotampa/">loclseotampa</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/localseotampa/48035772457/" title="John Mueller\'s Answers to Negative SEO Attacks - #Backlinking, #ContentMarketing, #Google, #LinkBuilding, #LocalSEO, #LocalSEOTampa, #NegativeSEO, #OnlineReputationManagement, #OrganicSEO, #SEO, #SEOCompany, #SEOTips, #SERP - https://www.localseotampa.com"><img src="https://live.staticflickr.com/65535/48035772457_095a4e3860_m.jpg" width="240" height="240" alt="John Mueller\'s Answers to Negative SEO Attacks - #Backlinking, #ContentMarketing, #Google, #LinkBuilding, #LocalSEO, #LocalSEOTampa, #NegativeSEO, #OnlineReputationManagement, #OrganicSEO, #SEO, #SEOCompany, #SEOTips, #SERP - https://www.localseotampa.com" /></a></p> <p>John Mueller from Google recently answered a question about a suspected negative SEO attack. This question was based on a website’s owner’s belief that they were getting a lot of spammy links because their competition was attempting to lower their rankings. The website owner wanted to know whether they should continue to disavow these links &hellip; <br /> Continue reading &#8220;&#8221;<br /> <br /> <br /> <a href="https://www.localseotampa.com/john-muellers-answers-to-negative-seo-attacks-201906/" rel="noreferrer nofollow">www.localseotampa.com/john-muellers-answers-to-negative-s...</a></p>',
        published: "2019-06-10T09:36:33Z",
        author: 'nobody@flickr.com ("loclseotampa")',
        author_id: "147064191@N07",
        tags:
          "contentmarketing contentmarketing contentmarketing contentmarketing contentmarketing contentmarketing contentmarketing contentmarketing contentmarketing contentmarketing contentmarketing contentmarketing contentmarketing google googlesalgorithms google’sdisavowtool localseo localseoranking negativeseo negativeseoattacks seo seostrategies spamlinks"
      },
      {
        title: "たこ焼きパーティー",
        link: "https://www.flickr.com/photos/tsehsun_kuo/48035773102/",
        media: {
          m: "https://live.staticflickr.com/65535/48035773102_c1b0bd49af_m.jpg"
        },
        date_taken: "2019-06-05T22:40:33-08:00",
        description:
          ' <p><a href="https://www.flickr.com/people/tsehsun_kuo/">manntoooo</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/tsehsun_kuo/48035773102/" title="たこ焼きパーティー"><img src="https://live.staticflickr.com/65535/48035773102_c1b0bd49af_m.jpg" width="240" height="180" alt="たこ焼きパーティー" /></a></p> ',
        published: "2019-06-10T09:36:42Z",
        author: 'nobody@flickr.com ("manntoooo")',
        author_id: "152142475@N03",
        tags: ""
      },
      {
        title: "Rua Marques de Ponte de Lima",
        link: "https://www.flickr.com/photos/rs_1978/48035773487/",
        media: {
          m: "https://live.staticflickr.com/65535/48035773487_fb6c02126f_m.jpg"
        },
        date_taken: "2019-06-02T07:59:54-08:00",
        description:
          ' <p><a href="https://www.flickr.com/people/rs_1978/">RS_1978</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/rs_1978/48035773487/" title="Rua Marques de Ponte de Lima"><img src="https://live.staticflickr.com/65535/48035773487_fb6c02126f_m.jpg" width="240" height="180" alt="Rua Marques de Ponte de Lima" /></a></p> <p>Lisboa</p>',
        published: "2019-06-10T09:36:47Z",
        author: 'nobody@flickr.com ("RS_1978")',
        author_id: "91733444@N08",
        tags: "portugal olympuspenf lissabon regiãodelisboa"
      },
      {
        title: "SPORT leto",
        link: "https://www.flickr.com/photos/scs-slovakia/48035773852/",
        media: {
          m: "https://live.staticflickr.com/65535/48035773852_04820fba25_m.jpg"
        },
        date_taken: "2019-06-10T11:32:20-08:00",
        description:
          ' <p><a href="https://www.flickr.com/people/scs-slovakia/">SCS Slovakia</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/scs-slovakia/48035773852/" title="SPORT leto"><img src="https://live.staticflickr.com/65535/48035773852_04820fba25_m.jpg" width="135" height="240" alt="SPORT leto" /></a></p> ',
        published: "2019-06-10T09:36:52Z",
        author: 'nobody@flickr.com ("SCS Slovakia")',
        author_id: "141692649@N08",
        tags: ""
      },
      {
        title: " ",
        link: "https://www.flickr.com/photos/michisunited/48035774167/",
        media: {
          m: "https://live.staticflickr.com/65535/48035774167_51b49e25cc_m.jpg"
        },
        date_taken: "2019-06-08T13:51:39-08:00",
        description:
          ' <p><a href="https://www.flickr.com/people/michisunited/">The Michi</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/michisunited/48035774167/" title=" "><img src="https://live.staticflickr.com/65535/48035774167_51b49e25cc_m.jpg" width="180" height="240" alt=" " /></a></p> ',
        published: "2019-06-10T09:36:56Z",
        author: 'nobody@flickr.com ("The Michi")',
        author_id: "58621877@N08",
        tags: ""
      },
      {
        title: "Perth - one last hooray",
        link: "https://www.flickr.com/photos/58493472@N07/48035774367/",
        media: {
          m: "https://live.staticflickr.com/65535/48035774367_3494cba93a_m.jpg"
        },
        date_taken: "2019-05-25T23:31:17-08:00",
        description:
          ' <p><a href="https://www.flickr.com/people/58493472@N07/">colesd</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/58493472@N07/48035774367/" title="Perth - one last hooray"><img src="https://live.staticflickr.com/65535/48035774367_3494cba93a_m.jpg" width="240" height="160" alt="Perth - one last hooray" /></a></p> <p></p>',
        published: "2019-06-10T09:36:59Z",
        author: 'nobody@flickr.com ("colesd")',
        author_id: "58493472@N07",
        tags: ""
      },
      {
        title: "Dammit Boyd Tshirt",
        link: "https://www.flickr.com/photos/181737158@N07/48035774392/",
        media: {
          m: "https://live.staticflickr.com/65535/48035774392_0a86882144_m.jpg"
        },
        date_taken: "2019-06-10T02:36:59-08:00",
        description:
          ' <p><a href="https://www.flickr.com/people/181737158@N07/">tshirtshopping</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/181737158@N07/48035774392/" title="Dammit Boyd Tshirt"><img src="https://live.staticflickr.com/65535/48035774392_0a86882144_m.jpg" width="240" height="240" alt="Dammit Boyd Tshirt" /></a></p> <p>Dammit Boyd Tshirt <a href="https://kingteeshop.com/product/dammit-boyd-tshirt/" rel="noreferrer nofollow">kingteeshop.com/product/dammit-boyd-tshirt/</a></p>',
        published: "2019-06-10T09:36:59Z",
        author: 'nobody@flickr.com ("tshirtshopping")',
        author_id: "181737158@N07",
        tags: ""
      }
    ];
    this.setState({ data: items });
    // const url =
    //   "https://cors-anywhere.herokuapp.com/https://www.flickr.com/services/feeds/photos_public.gne?tags=&tagmode=all&format=json";
    // // const url =
    // //   "https://cors-anywhere.herokuapp.com/https://www.flickr.com/services/feeds/photos_public.gne?id=181830538@N07&tags=&tagmode=all&format=json";
    // const method = "GET";
    // const req = new XMLHttpRequest();
    // const self = this;
    // req.onreadystatechange = function() {
    //   if (this.readyState === 4 && this.status === 200) {
    //     const data = JSON.parse(this.responseText.substring(15).slice(0, -1));
    //     // console.log(data);
    //     console.log(data.items);
    //     console.log(JSON.stringify(data.items));
    //     const limit = 20;
    //     const result =
    //       data.items.length >= limit ? data.items.slice(0, limit) : data.items;
    //     self.setState({ data: result });
    //   }
    // };
    // req.open(method, url, true);
    // req.send();
  }
  render() {
    const data = this.state ? this.state.data : {};
    const imageBoxList = _.map(data, item => (
      <ImageBox
        key={`${item.author_id}_${item.published}`}
        author={item.author}
        date={item.date_taken}
        fullImgUrl={item.link}
        tags={item.tags}
        src={item.media.m}
        alt={item.title}
      />
    ));
    return (
      <div>
        <Container>{imageBoxList}</Container>
      </div>
    );
  }
}

export default App;
