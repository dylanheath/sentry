import React, {useState, useEffect} from 'react';

// styling
import './more.css';

// utils
import { repoReleases } from '../../../utils/github/release';

// make type for release data
type releaseObj = {
  assets: Array<string>,
  assets_url: string,
  author: object,
  body: string,
  created_at: string,
  draft: boolean,
  id: number,
  name: string,
  node_id: string,
  prerelease: boolean,
  published_at: string,
  tag_name: string,
  tarball_url: string,
  target_commitish: string,
  upload_url: string,
  url: string,
  zipball_url: string
}

export default function Releases() {
  const [releaseData, setReleaseData] = useState<releaseObj>({assets: [], assets_url: "",
    author: {}, body: "", created_at: "", draft: false, id: 0,
    name: "", node_id: "", prerelease: false, published_at: "", tag_name: "", tarball_url: "",
    target_commitish: "", upload_url: "", url: "", zipball_url: ""});

  useEffect(() => {
    const getReleases = async () => {
      const release = await repoReleases()
        .then((result:any) => {
          setReleaseData(result);
	})
	.catch(() => {
          console.log("failed to get releases");
	})
    }
    getReleases();
  }, [])
  return (
    <div className="more-component">
       <div className="more-component-header-container">
         <p className="more-component-header">Releases</p>
	 <a className="more-component-header-real-time-tag">
           <svg viewBox="0 0 24 24" width="18" height="18" role="img" style={{fill: "rgb(70, 70, 70)"}}><path d="M21 4.5C21.0003 3.97403 20.8623 3.45723 20.5999 3.00142C20.3374 2.5456 19.9598 2.1668 19.5048 1.90299C19.0497 1.63918 18.5333 1.49963 18.0074 1.49835C17.4814 1.49706 16.9644 1.63407 16.508 1.89565C16.0517 2.15724 15.6722 2.53419 15.4075 2.98871C15.1429 3.44323 15.0023 3.95935 15.0001 4.48532C14.9978 5.01128 15.1338 5.5286 15.3945 5.9854C15.6553 6.44221 16.0315 6.82244 16.4855 7.08797C16.4016 8.06625 15.9478 8.87391 15.1322 9.49219C14.3002 10.125 13.1293 10.5 12 10.5C10.8708 10.5 9.69988 10.125 8.86785 9.49219C8.05222 8.87391 7.59847 8.06625 7.51457 7.08797C8.08444 6.75474 8.52849 6.24285 8.7779 5.63164C9.02731 5.02042 9.06814 4.344 8.89409 3.70721C8.72003 3.07043 8.34079 2.50883 7.81515 2.10946C7.28951 1.7101 6.64681 1.49526 5.98667 1.49825C5.32654 1.50123 4.68581 1.72188 4.16381 2.12598C3.6418 2.53009 3.26766 3.09509 3.09937 3.73342C2.93108 4.37176 2.97803 5.04778 3.23296 5.65672C3.48789 6.26566 3.93655 6.77351 4.50941 7.10156C4.60691 9.01734 5.50176 10.7048 7.05519 11.8828C8.02972 12.6216 9.23441 13.1339 10.5 13.3636V16.9036C9.92811 17.2338 9.48112 17.7435 9.2284 18.3536C8.97567 18.9638 8.93133 19.6402 9.10226 20.2781C9.27318 20.916 9.64982 21.4797 10.1738 21.8817C10.6977 22.2838 11.3396 22.5017 12 22.5017C12.6604 22.5017 13.3024 22.2838 13.8263 21.8817C14.3503 21.4797 14.7269 20.916 14.8978 20.2781C15.0687 19.6402 15.0244 18.9638 14.7717 18.3536C14.519 17.7435 14.072 17.2338 13.5 16.9036V13.3636C14.7657 13.1339 15.9703 12.6216 16.9449 11.8828C18.4983 10.7048 19.3932 9.01734 19.4907 7.10156C19.949 6.83915 20.3299 6.4604 20.5949 6.0036C20.86 5.54679 20.9997 5.02812 21 4.5V4.5ZM6.00004 3C6.29671 3 6.58672 3.08797 6.83339 3.2528C7.08007 3.41762 7.27233 3.65189 7.38586 3.92597C7.49939 4.20006 7.52909 4.50166 7.47122 4.79263C7.41334 5.08361 7.27048 5.35088 7.0607 5.56066C6.85092 5.77044 6.58364 5.9133 6.29267 5.97118C6.0017 6.02906 5.7001 5.99935 5.42601 5.88582C5.15192 5.77229 4.91766 5.58003 4.75283 5.33335C4.58801 5.08668 4.50004 4.79667 4.50004 4.5C4.50004 4.10217 4.65807 3.72064 4.93938 3.43934C5.22068 3.15803 5.60221 3 6.00004 3V3ZM12 21C11.7034 21 11.4134 20.912 11.1667 20.7472C10.92 20.5824 10.7277 20.3481 10.6142 20.074C10.5007 19.7999 10.471 19.4983 10.5289 19.2074C10.5867 18.9164 10.7296 18.6491 10.9394 18.4393C11.1492 18.2296 11.4164 18.0867 11.7074 18.0288C11.9984 17.9709 12.3 18.0006 12.5741 18.1142C12.8482 18.2277 13.0824 18.42 13.2472 18.6666C13.4121 18.9133 13.5 19.2033 13.5 19.5C13.5 19.8978 13.342 20.2794 13.0607 20.5607C12.7794 20.842 12.3979 21 12 21V21ZM18 6C17.7034 6 17.4134 5.91203 17.1667 5.7472C16.92 5.58238 16.7277 5.34811 16.6142 5.07402C16.5007 4.79994 16.471 4.49834 16.5289 4.20736C16.5867 3.91639 16.7296 3.64912 16.9394 3.43934C17.1492 3.22956 17.4164 3.0867 17.7074 3.02882C17.9984 2.97094 18.3 3.00065 18.5741 3.11418C18.8482 3.22771 19.0824 3.41997 19.2472 3.66664C19.4121 3.91332 19.5 4.20333 19.5 4.5C19.5 4.89782 19.342 5.27936 19.0607 5.56066C18.7794 5.84196 18.3979 6 18 6Z"></path></svg>
	   <div className="more-component-header-real-time-divider"></div>
	   <p className="more-component-real-time">Version</p>
	 </a>
       </div>
       <div className="more-component-description-container">
         <p className="more-component-release-header">{releaseData.name}</p>
         <div className="more-component-release-wrapper">
	   <div className="more-component-release-description-container">
	     <p className="more-component-release-description">{releaseData.body}</p> 
	   </div>
	 </div>
       </div>
       <div className="more-component-release-options-container">
         <a className="more-component-release-options-box">
           <div className="more-component-release-options-header-container">
             <p className="more-component-release-options-header">Release</p>
             <svg viewBox="0 0 24 24" width="16" height="16" role="img" style={{fill: "rgb(70, 70, 70)"}}><path d="M3.59999 3.59998C3.28173 3.59998 2.97651 3.7264 2.75147 3.95145C2.52642 4.17649 2.39999 4.48172 2.39999 4.79998V19.2C2.39999 19.5182 2.52642 19.8235 2.75147 20.0485C2.97651 20.2735 3.28173 20.4 3.59999 20.4C3.91825 20.4 4.22348 20.2735 4.44852 20.0485C4.67357 19.8235 4.79999 19.5182 4.79999 19.2V4.79998C4.79999 4.48172 4.67357 4.17649 4.44852 3.95145C4.22348 3.7264 3.91825 3.59998 3.59999 3.59998ZM15.9516 14.7516C15.733 14.9779 15.6121 15.281 15.6148 15.5957C15.6175 15.9103 15.7437 16.2113 15.9662 16.4338C16.1887 16.6562 16.4897 16.7825 16.8043 16.7852C17.1189 16.7879 17.4221 16.667 17.6484 16.4484L21.2484 12.8484C21.4734 12.6233 21.5997 12.3182 21.5997 12C21.5997 11.6818 21.4734 11.3766 21.2484 11.1516L17.6484 7.55158C17.5377 7.43696 17.4053 7.34555 17.2589 7.28265C17.1125 7.21976 16.955 7.18666 16.7957 7.18528C16.6363 7.18389 16.4783 7.21425 16.3308 7.27459C16.1834 7.33493 16.0494 7.42403 15.9367 7.5367C15.824 7.64937 15.7349 7.78336 15.6746 7.93083C15.6143 8.07831 15.5839 8.23632 15.5853 8.39566C15.5867 8.55499 15.6198 8.71246 15.6827 8.85886C15.7456 9.00527 15.837 9.13768 15.9516 9.24838L17.5032 10.8H8.39999C8.08173 10.8 7.77651 10.9264 7.55147 11.1514C7.32642 11.3765 7.19999 11.6817 7.19999 12C7.19999 12.3182 7.32642 12.6235 7.55147 12.8485C7.77651 13.0735 8.08173 13.2 8.39999 13.2H17.5032L15.9516 14.7516Z"></path></svg>
	   </div>
           <div className="more-component-release-options-footer-container">
             <p className="more-component-release-options-footer">View Release & details</p>
	   </div>
         </a>
         <div className="more-component-release-options-box">
           <div className="more-component-release-options-header-container">
             <p className="more-component-release-options-header">Contribute</p>
             <svg viewBox="0 0 24 24" width="16" height="16" role="img" style={{fill: "rgb(70, 70, 70)"}}><path d="M3.59999 3.59998C3.28173 3.59998 2.97651 3.7264 2.75147 3.95145C2.52642 4.17649 2.39999 4.48172 2.39999 4.79998V19.2C2.39999 19.5182 2.52642 19.8235 2.75147 20.0485C2.97651 20.2735 3.28173 20.4 3.59999 20.4C3.91825 20.4 4.22348 20.2735 4.44852 20.0485C4.67357 19.8235 4.79999 19.5182 4.79999 19.2V4.79998C4.79999 4.48172 4.67357 4.17649 4.44852 3.95145C4.22348 3.7264 3.91825 3.59998 3.59999 3.59998ZM15.9516 14.7516C15.733 14.9779 15.6121 15.281 15.6148 15.5957C15.6175 15.9103 15.7437 16.2113 15.9662 16.4338C16.1887 16.6562 16.4897 16.7825 16.8043 16.7852C17.1189 16.7879 17.4221 16.667 17.6484 16.4484L21.2484 12.8484C21.4734 12.6233 21.5997 12.3182 21.5997 12C21.5997 11.6818 21.4734 11.3766 21.2484 11.1516L17.6484 7.55158C17.5377 7.43696 17.4053 7.34555 17.2589 7.28265C17.1125 7.21976 16.955 7.18666 16.7957 7.18528C16.6363 7.18389 16.4783 7.21425 16.3308 7.27459C16.1834 7.33493 16.0494 7.42403 15.9367 7.5367C15.824 7.64937 15.7349 7.78336 15.6746 7.93083C15.6143 8.07831 15.5839 8.23632 15.5853 8.39566C15.5867 8.55499 15.6198 8.71246 15.6827 8.85886C15.7456 9.00527 15.837 9.13768 15.9516 9.24838L17.5032 10.8H8.39999C8.08173 10.8 7.77651 10.9264 7.55147 11.1514C7.32642 11.3765 7.19999 11.6817 7.19999 12C7.19999 12.3182 7.32642 12.6235 7.55147 12.8485C7.77651 13.0735 8.08173 13.2 8.39999 13.2H17.5032L15.9516 14.7516Z"></path></svg>
	   </div>
	   <div className="more-component-release-options-footer-container">
             <p className="more-component-release-options-footer">Contribute to our Project</p>
	   </div>
         </div>
       </div>
    </div>
  )
}