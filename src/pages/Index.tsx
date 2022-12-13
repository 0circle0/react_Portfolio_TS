import Card from '../components/Card'

const Index = () => {
  document.title = "Portfolio";

  let SpriteCreatorCard = {
    Title: "Sprite Creator 3",
    Text: "Customizable Animated Sprite Character Generator. Exports animated sprite sheets for use in games and apps. GUI Themes",
    Link: "https://spritecreator.itch.io/spritecreator3",
    SrcImage: "/img/background2.png"
  }
  let DiceCard = {
    Title: "Dice",
    Text: "Roll Customizable dice with multiple colors and menu options using Physics for WebGL, Desktop, and Android",
    Link: "https://spritecreator.itch.io/dice",
    SrcImage: "/img/Dice.png"
  }
  let WordCard = {
    Title: "Words",
    Text: "Type the words. Destroy the cubes. Keep track of your typing speed. Unity3D typing asset.",
    Link: "https://spritecreator.itch.io/words",
    SrcImage: "/img/Words.png"
  }
  let GithubCard = {
    Title: "Github",
    Text: " Visit my github to see many projects using C/C++, C#, JavaScript, Server/Client with NodeJS, Unity3D Client/Server",
    Link: "https://github.com/0circle0",
    SrcImage: "/img/Git-Hub-Mark.png"
  }
  let BlazorCard = {
    Title: "Blazor",
    Text: "This site was also created with Blazor 6 and Bootstrap 5 view the source code on Github",
    Link: "https://github.com/0circle0/Portfolio",
    SrcImage: "https://devblogs.microsoft.com/dotnet/wp-content/uploads/sites/10/2019/04/BrandBlazor_big_with_border.png"
  }
  let ReactCard = {
    Title: "React",
    Text: "This site was also created with React 18 with JavaScript and Bootstrap 5 view the source code on Github",
    Link: "https://github.com/0circle0/react_portfolio",
    SrcImage: "/logo192.png"
  }

  let ReactCardTS = {
    Title: "React",
    Text: "This site was created with React 18 with TypeScript and Bootstrap 5 view the source code on Github",
    Link: "https://github.com/0circle0/react_Portfolio_TS",
    SrcImage: "/logo192.png"
  }
  return (
    <>
      <Card Details={SpriteCreatorCard} />
      <Card Details={DiceCard} />
      <Card Details={WordCard} />
      <Card Details={GithubCard} />
      <Card Details={ReactCardTS} />
      <Card Details={ReactCard} />
      <Card Details={BlazorCard} />
    </>
  );
}

export default Index;