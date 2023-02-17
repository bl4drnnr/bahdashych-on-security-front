<h1 align="center">
  My personal blog
</h1>

<h3 align="center">
  I sincerely believe that the best way to learn anything is to start teaching other people, sharing your knowledge with them. 
</h3>

<h3 align="center">
  Thank you!
</h3>

## Table of contents
1. [Structure and implementation](#structure-and-implementation)
2. [Security issues](#security-issues)
3. [Contact and references](#contact-and-references)
4. [License](#license)

## Structure and implementation

## Security issues

Bruh, security issues?! Yeah, probably you have notices that every blog post is written in JSON
format, just specifying all fields and structure of the post itself, like titles, subtitles, code blocks etc.
Well, here is the XSS injection attack comes into play. Because I wanted to wrap some text
right inside the paragraph just `like this` for instance, I had to decided how I wanted to do that.

I had a couple of ideas on that, the only requirement was that every post has to be within "one-page" structure.
Basically, if you take a look at the file structure, as it has been mentioned before, you will find
that there is only one page which gets post name from the URL and then just checks (using environmental variables), 
if the page exists, it "renders" it from JSON, otherwise, it redirects to 404 page.

![1](media/1.png)

At this point I guess some of you already has figured out what is the issue.
If I need to render HTML that is written as text, I need to use `dangerouslySetInnerHTML` and
this is the straight road to XSS, if text comes from untrusted sources and/or not sanitized. 

```typescript jsx
<PostParagraph 
  dangerouslySetInnerHTML={{ __html: t(`articles:${postName}.content.p${index}`) }}
/>
```

```json lines
{
  "p14": "Very last step here is checking if our nginx sever is working correctly. In order to do that go to <span class='code-block'>/etc/nginx/sites-available/default</span> and paste next content (<span class='code-block'>*q</span> is our domain):",
}
```

Above you have seen an example of how I render simple paragraph. You can easily inject there 
`<script>` tag and do your dirty things. Fortunately, there is only one source, and it's trusted, and it's me :)

As I have mentioned previously, I had a couple of ideas on how to implement that.
The way it's been implemented is actually the easiest one. The other quite easy method is 
simple sanitization. The only thing that would be excluded in this case is `<script>` tag.

The most completed is to create "your own tags" and after pages gets JSON, instead of 
rendering it at this exact moment, you would pass it to function, that would interpret your tags
to normal HTML and return it to the page. Also, it would be the sort of sanitization, as
it could be implemented right in that function. Why did I do this way? Well... You know... I'm kinda lazy :)

## Contact and references

- Developer contact - [contact@mikhailbahdashych.me](mailto:contact@mikhailbahdashych.me)
- Blog - [blog.mikhailbahdashych.me](https://blog.mikhailbahdashych.me)

## License

Licensed by [MIT licence](LICENSE).

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)


