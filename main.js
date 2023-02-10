const mainDiv = document.getElementById("insert-links-here");

linksData = [
    {
        title: "NCCT 2022 Pictures",
        link: "https://rnsit-my.sharepoint.com/:f:/g/personal/1rn19is094_rnsit_onmicrosoft_com/EvUwGYSMGfhMkL6jPtR8MvwBgevVJedlxnMozBxVGgy59A?e=lgIBUo",
        image: "./data/images/icons8-meeting-room-100.png",
    },

    {
        title: "Prop 2022 Pictures",
        link: "https://rnsit-my.sharepoint.com/:f:/g/personal/1rn19is094_rnsit_onmicrosoft_com/ElbW-WEZdTBNoakDd892a4QBwoPRW4CdbUo5_2Z1oDrO1w?e=em0Y8g",
        image: "./data/images/icons8-camera-icon-67.png",
    },

    {
        title: "ISE Farewell 2022 Pictures",
        link: "https://rnsit-my.sharepoint.com/:f:/g/personal/1rn19is094_rnsit_onmicrosoft_com/EophIxcQIohOt6ORQiYY_hYBgT3UWK882s1kSVLjP3hF4Q?e=puQlEH",
        image: "./data/images/icons8-camera-icon-67.png",
    },

    {
        title: "ISE Farewell 2022 Video",
        link: "https://youtu.be/pobRtWqx82I",
        image: "./data/images/icons8-camera-video-96.png",
    },

    {
        title: "Pinnacle 2022 Pictures",
        link: "https://rnsit-my.sharepoint.com/:f:/g/personal/1rn19is094_rnsit_onmicrosoft_com/ErdYNuilbwpIsMdrQOR4cTEBFqLIzfPGxovl21Rcqkj52A?e=mKnGis",
        image: "./data/images/icons8-camera-icon-67.png",
    },

    {
        title: "Advisory Board May 2022 Pictures ",
        link: "https://rnsit-my.sharepoint.com/:f:/g/personal/1rn19is094_rnsit_onmicrosoft_com/EtyuhvRiJ_VHntvxKQur590BNhYqzLFzZ2QWtw02ZVPUaA?e=mYQjWh",
        image: "./data/images/icons8-camera-icon-67.png",
    },

    {
        title: "ISE Placement Celebration 2022 Pictures",
        link: "https://rnsit-my.sharepoint.com/:f:/g/personal/1rn19is094_rnsit_onmicrosoft_com/EpPPWKHvZQVDs9MBqhSMK-wBsIuOL4-6aAi1HpMdATDkmg?e=bQ6dIk",
        image: "./data/images/icons8-camera-icon-67.png",
    },

    {
        title: "Jwalanth sir Talk 2021 Pictures",
        link: "https://rnsit-my.sharepoint.com/:f:/g/personal/1rn19is094_rnsit_onmicrosoft_com/Ep-c2DNwXLJMvJckiSQ6JUwBZHEOD-u2b3GzPCb4b3dq0g?e=YiPX1i",
        image: "./data/images/icons8-camera-icon-67.png",
    },

    {
        title: "Junior Induction 2021 Pictures",
        link: "https://rnsit-my.sharepoint.com/:f:/g/personal/1rn19is094_rnsit_onmicrosoft_com/ElQSVTZ6wFNJq5teytU12FABXZ6Z7F7RYO6sohMN4O5y_Q?e=h8xrzb",
        image: "./data/images/icons8-camera-icon-67.png",
    },

    {
        title: "Events for Pinnacle 2022 (Archived Links)",
        link: "./archive/index.html",
        image: "./data/images/Pinnacle logo.png",
    },
];

linksData.forEach((link) => {
    if (!link.title || !link.link || !link.image) return;
    const div = document.createElement("div");
    div.classList.add("page-item-wrap", "relative");
    div.innerHTML = `
        <div class="page-item flex-both-center absolute"></div>
        <a target="_blank" rel="noopener nofollow" class="page-item-each py-10 flex-both-center"
            href="${link.link}"
            data-id="" data-type="page_item">
            <img class="link-each-image" src="${link.image}" />
            <span class="item-title text-center">${link.title}</span>
        </a>
    `;
    mainDiv.appendChild(div);
});

{
    /* <div class="page-item-wrap relative">
                <div class="page-item flex-both-center absolute"></div>
                <a target="_blank" rel="noopener nofollow" class="page-item-each py-10 flex-both-center"
                    href="https://rnsit-my.sharepoint.com/:f:/g/personal/1rn19is094_rnsit_onmicrosoft_com/EvUwGYSMGfhMkL6jPtR8MvwBgevVJedlxnMozBxVGgy59A?e=lgIBUo"
                    data-id="" data-type="page_item">
                    <img class="link-each-image" src="./data/images/icons8-meeting-room-100.png  " />
                    <span class="item-title text-center">Pictures for NCCT 2022 </span>
                </a>
            </div> */
}
