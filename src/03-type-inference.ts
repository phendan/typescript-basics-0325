// import ky from 'ky';

const html = String.raw;

try {
    // const response = await ky.get('/posts.json').json();
    // console.log(validatePosts(response));
    // if (validatePosts(response)) {
    //     renderPosts(response);
    // }
} catch (error) {
    console.error(error);
}

// Type Assertion
// function assertPosts(data: unknown): asserts data is Post[] {
//     if (!Array.isArray(data)) throw new Error();
// }

// Type Guard
function validatePosts(data: unknown): data is Post[] {
    if (!Array.isArray(data)) return false;

    for (let item of data) {
        if (!item.hasOwnProperty('id') || typeof item.id !== 'number') {
            return false;
        }

        if (!item.hasOwnProperty('title') || typeof item.title !== 'string') {
            return false;
        }

        if (!item.hasOwnProperty('body') || typeof item.body !== 'string') {
            return false;
        }

        if (item.hasOwnProperty('comments') && !validateComments(item.comments)) {
            return false;
        }
    }

    return true;
}

function validateComments(data: unknown): data is Comment[] {
    if (!Array.isArray(data)) return false;

    for (let item of data) {
        if (!item.hasOwnProperty('id') || typeof item.id !== 'number') {
            return false;
        }

        if (!item.hasOwnProperty('message') || typeof item.message !== 'string') {
            return false;
        }
    }

    return true;
}

export type Post = {
    id: number;
    title: string;
    body: string;
    comments?: Comment[];
};

export type Comment = {
    id: number;
    message: string;
};

function renderPosts(posts: Post[]) {
    const postElementsHtml = posts
        .map(post => {
            return html`
                <article>
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                    ${post.comments ? renderComments(post.comments) : ''}
                </article>
            `;
        })
        .join('');

    render('#app', postElementsHtml);
}

function renderComments(comments: Comment[]) {
    const commentElementsHtml = comments
        .map(comment => {
            return html`<li>
                <p>${comment.message}</p>
            </li>`;
        })
        .join('');

    const commentListHtml = html`<ul>
        ${commentElementsHtml}
    </ul>`;

    return commentListHtml;
}

function render(parentSelector: string, html: string) {
    const template = document.createElement('template');
    template.innerHTML = html;
    const parentElement = document.querySelector(parentSelector);
    parentElement?.appendChild(template.content);
}
