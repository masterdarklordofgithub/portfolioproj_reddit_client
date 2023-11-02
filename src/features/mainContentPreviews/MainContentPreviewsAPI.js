const contentPreviews = [
    {
        "id": 1,
        "title": "Biden Inaugurated as 46th President - The New York Times",
        "preview": "Joseph Robinette Biden Jr. and Kamala Devi Harris took the oath of office at a Capitol still reeling from the attack of a violent mob at a time when a deadly pandemic is still ravaging the country.",
        "fullText": "Joseph Robinette Biden Jr. and Kamala Devi Harris took the oath of office at a Capitol still reeling from the attack of a violent mob at a time when a deadly pandemic is still ravaging the country.Joseph Robinette Biden Jr. and Kamala Devi Harris took the oath of office at a Capitol still reeling from the attack of a violent mob at a time when a deadly pandemic is still ravaging the country.Joseph Robinette Biden Jr. and Kamala Devi Harris took the oath of office at a Capitol still reeling from the attack of a violent mob at a time when a deadly pandemic is still ravaging the country.",
        "image": "https://static01.nyt.com/images/2021/01/20/us/politics/20dc-biden1-sub3/20dc-biden1-sub3-facebookJumbo.jpg"
    },
    {
        "id": 2,
        "title": "LG says it might quit the smartphone market",
        "preview": "LG says it needs to make \"a cold judgment\" about its only money-losing division.",
        "fullText": "LG says it needs to make \"a cold judgment\" about its only money-losing division.LG says it needs to make \"a cold judgment\" about its only money-losing division.LG says it needs to make \"a cold judgment\" about its only money-losing division.",
        "image": "https://cdn.arstechnica.net/wp-content/uploads/2021/01/37-760x380.jpg"
    },
    {
        "id": 3,
        "title": "VW CEO teases Tesla’s Elon Musk in Twitter debut",
        "preview": "VW CEO Herbert Diess is poking fun at his friendly rivalry with Tesla CEO Elon Musk in his Twitter debut as he tries to position Volkswagen as a leader in electrification.",
        "fullText": "TVW CEO Herbert Diess is poking fun at his friendly rivalry with Tesla CEO Elon Musk in his Twitter debut as he tries to position Volkswagen as a leader in electrification.TVW CEO Herbert Diess is poking fun at his friendly rivalry with Tesla CEO Elon Musk in his Twitter debut as he tries to position Volkswagen as a leader in electrification.TVW CEO Herbert Diess is poking fun at his friendly rivalry with Tesla CEO Elon Musk in his Twitter debut as he tries to position Volkswagen as a leader in electrification.",
        "image": "https://i1.wp.com/electrek.co/wp-content/uploads/sites/3/2020/09/VW-CEO-Hebert-Diess-Tesla-CEO-Elon-Musk-selfie-hero.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1"
    },
    {
        "id": 4,
        "title": "QAnon believers struggle with inauguration.",
        "preview": "As President Biden took office, some QAnon believers tried to rejigger their theories to accommodate a transfer of power.",
        "fullText": "As President Biden took office, some QAnon believers tried to rejigger their theories to accommodate a transfer of power. As President Biden took office, some QAnon believers tried to rejigger their theories to accommodate a transfer of power. As President Biden took office, some QAnon believers tried to rejigger their theories to accommodate a transfer of power.",
        "image": "https://static01.nyt.com/images/2021/01/20/business/20distortions-qanon/20distortions-qanon-facebookJumbo.jpg"
    }
];

export function fetchContentPreviews() {
    return new Promise((resolve) =>
        setTimeout(() => resolve({ data: contentPreviews }), 500)
    );
}
export function fetchFullContentById(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const contentPreview = contentPreviews.find((content) => content.id === id);
            resolve({ data: contentPreview });
        }, 500);
    });
}