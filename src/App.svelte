<script>
    import htmlclean from 'htmlclean';
    import { marked } from 'marked';

    const languages = [
        { id: 'en', name: 'English' },
        { id: 'fi', name: 'Finnish' },
        { id: 'fr', name: 'French' },
        { id: 'de', name: 'German' },
        { id: 'no', name: 'Norwegian' },
        { id: 'pt', name: 'Portuguese' },
        { id: 'es', name: 'Spanish' },
    ];

    const translations = {
        en: { termsTitle: 'Terms and Conditions',               buttonText: 'Get bonus' },
        fi: { termsTitle: 'Säännöt ja ehdot',                   buttonText: 'Hanki bonus' },
        fr: { termsTitle: 'Termes et conditions',               buttonText: 'Obtenez un bonus' },
        de: { termsTitle: 'Allgemeine Geschäftsbedingungen',    buttonText: 'Bonus erhalten' },
        no: { termsTitle: 'Vilkår og betingelser',              buttonText: 'Få bonus' },
        pt: { termsTitle: 'Termos e condições',                 buttonText: 'Obter bônus' },
        es: { termsTitle: 'Términos y condiciones',             buttonText: 'Obtener bonificación' },
    };

    let theme = 'dark';
    let htmlLang = 'en';
    let type = 'bonus';
    let title = 'Lorem ipsum dolor';
    let image = { url: 'https://placehold.co/600x150/3b6785/7394ae/jpg?font=open-sans&text=Image%20placeholder', width: 600, height: 150 };
    let text = 'Lorem ipsum dolor sit amet! Consectetur elit adipisicing aperiam architecto: asperiores **dolor: HARUM** inventore iure libero nihil numquam officiis optio possimus **quasi rem sequi tenetur**, vero voluptates!\n\nAlias asperiores eligendi fuga iste **molestias ratione reprehenderit** saepe sed tempora. Accusantium aperiam esse id libero omnis porro quidem. Mollitia officia, quod!';
    let footnote = '18+ begambleaware.org';
    let survey = {
        event: 'SURVEY EVENT',
        name: 'SURVEY123',
        feedbackTitle: 'Thank you for participating!',
        options: [
            {
                buttonText: 'Option A',
                feedback: 'You voted for the option A. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            },
            {
                buttonText: 'Option B',
                feedback: 'You voted for the option B. Atque debitis est facere facilis maiores odit quo recusandae soluta!',
            },
            {
                buttonText: 'Option C',
                feedback: 'You voted for the option C. Aliquid amet deleniti dolores eligendi itaque molestiae neque, numquam officiis quia voluptas?',
            },
        ],
        useButtonTextAsValue: false,
    };

    $: terms = { title: translations[htmlLang].termsTitle, content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium explicabo fuga iste maxime voluptatibus aliquam animi aperiam.' }
    $: button = { text: translations[htmlLang].buttonText, link: '/en/home.html' };

    // const fontFaceStyles = `@font-face {font-family: 'Open Sans';src: url('https://cdn-aws.platincasino.com/fonts/OpenSans/20200419142200/OpenSans-Regular.eot');src: url('https://cdn-aws.platincasino.com/fonts/OpenSans/20200419142200/OpenSans-Regular.eot#iefix') format('embedded-opentype'), url('https://cdn-aws.platincasino.com/fonts/OpenSans/20200419142200/OpenSans-Regular.woff2') format('woff2'), url('https://cdn-aws.platincasino.com/fonts/OpenSans/20200419142200/OpenSans-Regular.woff') format('woff'), url('https://cdn-aws.platincasino.com/fonts/OpenSans/20200419142200/OpenSans-Regular.ttf') format('truetype'), url('https://cdn-aws.platincasino.com/fonts/OpenSans/20200419142200/OpenSans-Regular.svg#Regular') format('svg');font-weight: normal;font-style: normal;}@font-face {font-family: 'Open Sans';src: url('https://cdn-aws.platincasino.com/fonts/OpenSans/20200419142200/OpenSans-Semibold.eot');src: url('https://cdn-aws.platincasino.com/fonts/OpenSans/20200419142200/OpenSans-Semibold.eot#iefix') format('embedded-opentype'), url('https://cdn-aws.platincasino.com/fonts/OpenSans/20200419142200/OpenSans-Semibold.woff2') format('woff2'), url('https://cdn-aws.platincasino.com/fonts/OpenSans/20200419142200/OpenSans-Semibold.woff') format('woff'), url('https://cdn-aws.platincasino.com/fonts/OpenSans/20200419142200/OpenSans-Semibold.ttf') format('truetype'), url('https://cdn-aws.platincasino.com/fonts/OpenSans/20200419142200/OpenSans-Semibold.svg#Semibold') format('svg');font-weight: bold;font-style: normal;}`;
    const fontFaceStyles = '';

    $: textColorRGB = (theme === 'light') ? '0, 0, 0' : '255, 255, 255';
    $: markup = htmlclean(`
        <!doctype html>
        <html lang="${htmlLang}">
            <head>
                <base target="_parent">
                <title>${title}</title>
                <sty`+`le>
                    ${fontFaceStyles}
                    *,
                    *:before,
                    *:after {
                      box-sizing: border-box;
                    }
                    body {
                        padding: .5rem;
                        margin: 0;
                        font-family: "Open Sans", sans-serif;
                        font-size: .875rem;
                        line-height: 1.5;
                        color: rgba(${textColorRGB}, .87);
                        text-align: left !important;
                    }
                    a:not(.btn) {
                        color: #00a0ac;
                        text-decoration: none;
                    }
                    a:not(.btn):hover {
                        color: #33b3bd;
                        text-decoration: underline;
                    }
                    p {
                        margin: 1rem 0 0;
                    }
                    summary {
                        margin-bottom: .25rem;
                        cursor: pointer;
                    }
                    img {
                        display: block;
                        height: auto;
                        max-width: 100%;
                    }
                    .title {
                        margin-bottom: 2.5rem;
                        font-size: 1.25rem;
                        font-weight: 600;
                        color: #00a0ac;
                        text-align: center;
                    }
                    .footer {
                        padding-top: 1rem;
                        margin-top: 2rem;
                        font-size: .75rem;
                        text-align: center;
                        color: rgba(${textColorRGB}, .6);
                        border-top: 1px solid rgba(${textColorRGB}, .15);
                    }
                    .footnote {
                        color: rgba(${textColorRGB}, .38);
                    }
                    details + .footnote {
                        margin-top: .25rem;
                    }
                    .text-center {
                        text-align: center;
                    }
                    .btn {
                        display: inline-block;
                        padding: .875rem 2.5rem;
                        margin-top: 2.5rem;
                        font-family: inherit;
                        font-size: .875rem;
                        font-weight: 600;
                        color: #fff;
                        text-align: center;
                        text-decoration: none;
                        vertical-align: middle;
                        cursor: pointer;
                        border: none;
                        border-radius: 10rem;
                    }
                    .btn + .btn {
                        margin-top: 1rem;
                    }
                    .btn-primary {
                        background-color: #00a0ac;
                    }
                    .btn-primary:hover {
                        background-color: #1fabb6;
                    }
                    .btn-block {
                        display: block;
                        width: 100%;
                    }
                    .d-none {
                        display: none !important;
                    }
                </sty`+`le>
            </head>
            <body>
                <div id="content">
                    ${title ? `<div class="title">${title}</div>` : ''}
                    ${image.url ? `<img src="${image.url}"${image.width && image.height ? ` width="${image.width}" height="${image.height}"` : ''} alt="">` : ''}
                    ${marked(text)}
                    ${type === 'bonus' ? `<a class="btn btn-primary btn-block" href="${button.link}">${button.text ? button.text : '&nbsp;'}</a>` : ''}
                    ${type === 'survey' ? survey.options.map((option, i) => {
                        return option.buttonText && `<button class="btn btn-primary btn-block"${i === 0 ? ' style="margin-top: 1rem;"' : ''} onclick="submit(${i + 1})"${survey.useButtonTextAsValue === true ? ` data-option="OPTION ${String.fromCharCode(i + 64 + 1)}"` : ''}>${option.buttonText}</button>`;
                    }).join('') : ''}
                    ${terms.title && terms.content || footnote ? `<div class="footer">${terms.title && terms.content ? `<details><summary>${terms.title}</summary>${terms.content}</details>` : ''}${footnote ? `<div class="footnote">${footnote}</div>` : ''}</div>` : ''}
                </div>
                ${type === 'survey' ? survey.options.map((option, i) => {
                    return option.buttonText && `<div class="feedback feedback-${i + 1} d-none"><div class="title">${survey.feedbackTitle}</div><p class="text-center">${option.feedback}</p></div>`
                }).join('') : ''}
            </body>
            ${type === 'survey' ? `
                <scr`+`ipt>
                    var $content = document.getElementById('content');

                    function submit(id) {
                        $content.classList.add('d-none');
                        document.querySelector('.feedback-' + id).classList.remove('d-none');

                        if (parent.$solitics) {
                            var customFields = {
                                'surveyName': '${survey.name}',
                                'option': event.currentTarget.getAttribute('data-option') || event.currentTarget.innerText,
                            };

                            parent.$solitics.emit('${survey.event}', 0, customFields);
                        }
                    }
                </scr`+`ipt>
            ` : ''}
        </html>
    `, { unprotect: [/<style[\s\S]+?<\/style>/, /<script[\s\S]+?<\/script>/] });

    function handleIframeLoad() {
        const body = this.contentDocument.body;
        const img = body.querySelector('img');

        this.style.height = body.scrollHeight + 'px';
        image.width = img ? img.naturalWidth : 0;
        image.height = img ? img.naturalHeight : 0;
    }

    function handleCopyButtonClick(e) {
        e.target.classList.add('has-tooltip');

        navigator.clipboard.writeText(markup).then(function () {
            e.target.setAttribute('data-tooltip', 'Copied');
        }, function () {
            e.target.setAttribute('data-tooltip', 'Unable to copy');
        });
    }

    function handleCopyButtonMouseleave(e) {
        e.target.classList.remove('has-tooltip');
    }

    // Solitics mock
    window.$solitics = {
        emit: (transactionType, transactionAmount, customFields) => {
            alert(`The following data will be submitted.\nEvent: ${transactionType}, survey name: ${customFields.surveyName}, selected option: ${customFields.option}. \nℹ️ This alert is shown only for debugging purposes, it won't appear in the real pop-up.`);
        },
    };
</script>

<div class="settings">
    <div class="card mb-3">
        <div class="card-header">Settings</div>
        <div class="card-body">
            <!-- Theme -->
            <fieldset class="mb-4">
                <legend class="form-label">Theme</legend>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" id="formThemeDark" name="theme" type="radio" value="dark" bind:group={theme}>
                    <label class="form-check-label" for="formThemeDark">Dark</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" id="formThemeLight" name="theme" type="radio" value="light" bind:group={theme}>
                    <label class="form-check-label" for="formThemeLight">Light</label>
                </div>
                <div class="form-text">This setting only affects the appearance of the content. Don't forget to set an appropriate theme in the dashboard.</div>
            </fieldset>
            <!-- Language -->
            <div class="mb-4">
                <label class="form-label" for="formLanguage">Language</label>
                <select class="form-select" id="formLanguage" bind:value={htmlLang}>
                    {#each languages as language}
                        <option value="{language.id}">{language.name}</option>
                    {/each}
                </select>
                <div class="form-text">This setting sets the default value of some fields (for example,  the Terms and Conditions title) in the selected language. It also adds an appropriate <code>lang</code> attribute to the <code>&lt;html&gt;</code> element.<br><mark>Note: please let me know if the translations need to be updated or any language is missing.</mark></div>
            </div>
            <!-- Type -->
            <fieldset>
                <legend class="form-label">Type</legend>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" id="formTypeBonus" name="type" type="radio" value="bonus" bind:group={type}>
                    <label class="form-check-label" for="formTypeBonus">Bonus</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" id="formTypeSurvey" name="type" type="radio" value="survey" bind:group={type}>
                    <label class="form-check-label" for="formTypeSurvey">Survey</label>
                </div>
            </fieldset>
        </div>
    </div>
    <div class="card{type === 'survey' ? ' mb-3' : ''}">
        <div class="card-header">Content</div>
        <div class="card-body border-bottom">
            <!-- Title -->
            <div class="mb-3">
                <label class="form-label" for="formTitle">Title</label>
                <input class="form-control" id="formTitle" type="text" bind:value={title} />
            </div>
            <!-- Image -->
            <div class="mb-3">
                <label class="form-label" for="formImageUrl">Image URL</label>
                <input class="form-control" id="formImageUrl" type="text" bind:value={image.url}>
                <div class="form-text">Add a direct link to an image. Example: https://www.example.com/img/solitics/en/bonus.jpg.</div>
            </div>
            <!-- Text -->
            <div>
                <label class="form-label" for="formText">Text</label>
                <textarea class="form-control" id="formText" rows="12" bind:value={text}></textarea>
                <div class="form-text">Use <a href="https://www.markdownguide.org/cheat-sheet/" target="_blank" rel="noreferrer">Markdown syntax</a> to format text. Example: **bold text**, [a link](https://www.example.com). To create paragraphs, use a blank line to separate lines of text.<br><mark>Note: please let me know if any element you use looks odd, I'll update its style.</mark></div>
            </div>
        </div>
        {#if type === 'bonus' }
            <!-- Button -->
            <div class="card-body border-bottom">
                <div class="card-title">Button</div>
                <div class="mb-3">
                    <label class="form-label" for="formButtonText">Text</label>
                    <input class="form-control" id="formButtonText" type="text" bind:value={button.text}>
                </div>
                <div>
                    <label class="form-label" for="formButtonLink">Link</label>
                    <input class="form-control" id="formButtonLink" type="text" bind:value={button.link}>
                    <div class="form-text">Add a relative link with a preceding slash and a locale. Example: /en/home.html.</div>
                </div>
            </div>
        {/if}
        <!-- Terms -->
        <div class="card-body border-bottom">
            <div class="card-title">Terms and conditions</div>
            <div class="mb-3">
                <label class="form-label" for="formTermsTitle">Title</label>
                <input class="form-control" id="formTermsTitle" type="text" bind:value={terms.title}>
                <div class="form-text">If you don't need the Terms and Conditions, leave this field blank.</div>
            </div>
            <div>
                <label class="form-label" for="formTermsContent">Content</label>
                <textarea class="form-control" id="formTermsContent" rows="3" bind:value={terms.content}></textarea>
            </div>
        </div>
        <!-- Footnote -->
        <div class="card-body">
            <div>
                <label class="form-label" for="formFootnote">Footnote</label>
                <input class="form-control" id="formFootnote" type="text" bind:value={footnote}/>
                <div class="form-text">If you don't need the footnote, leave this field blank.</div>
            </div>
        </div>
    </div>
    {#if type === 'survey'}
        <!-- Survey -->
        <div class="card">
            <div class="card-header">Survey</div>
            <div class="card-body border-bottom">
                <div class="mb-3">
                    <label class="form-label" for="formSurveyEvent">Event</label>
                    <input class="form-control" id="formSurveyEvent" type="text" bind:value={survey.event}>
                </div>
                <div class="mb-3">
                    <label class="form-label" for="formSurveyName">Name</label>
                    <input class="form-control" id="formSurveyName" type="text" bind:value={survey.name}>
                </div>
                <div class="mb-3">
                    <label class="form-label" for="formSurveyFeedbackTitle">Feedback title</label>
                    <input class="form-control" id="formSurveyFeedbackTitle" type="text" bind:value={survey.feedbackTitle}>
                </div>
            </div>
            {#each survey.options as { buttonText, feedback }, i}
                <div class="card-body border-bottom">
                    <div class="card-title">Option {String.fromCharCode(i + 64 + 1)}</div>
                    <div class="mb-3">
                        <label class="form-label" for="formSurveyOptionButtonText{i}">Button text</label>
                        <input class="form-control" id="formSurveyOptionButtonText{i}" type="text" bind:value={buttonText}>
                        <div class="form-text">If you don't need this option, leave this field blank.</div>
                    </div>
                    <div>
                        <label class="form-label" for="formSurveyFeedbackText">Feedback text</label>
                        <textarea class="form-control" id="formSurveyFeedbackText" rows="6" bind:value={feedback}></textarea>
                    </div>
                </div>
            {/each}
            <div class="card-body">
                <div>
                    <div class="form-check form-switch">
                        <input class="form-check-input" id="formSurveyUseButtonTextAsValue" type="checkbox" bind:checked={survey.useButtonTextAsValue}>
                        <label class="form-check-label" for="formSurveyUseButtonTextAsValue">Use button text as selected option</label>
                    </div>
                    <div class="form-text">If checked, the clicked button's text will be used as an option's value. Otherwise, a generic value will be used (OPTION A, OPTION B, or OPTION C).</div>
                </div>
            </div>
        </div>
    {/if}
</div>

<div class="preview">
    <div class="preview-modal theme-{theme}">
        <div class="preview-modal-content">
            <div class="preview-close-button">×</div>
            <div class="preview-modal-msg">
                <iframe class="preview-iframe-content" srcdoc="{markup}" title="{title}" on:load={handleIframeLoad}></iframe>
            </div>
        </div>
    </div>
</div>

<div class="output d-flex flex-column">
    <button class="btn btn-primary btn-copy align-self-start mb-3" on:click={handleCopyButtonClick} on:mouseleave={handleCopyButtonMouseleave} on:blur={handleCopyButtonMouseleave}>Copy code to clipboard</button>
    <pre class="flex-grow-1 mb-0">{markup}</pre>
</div>
