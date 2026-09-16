import { Article } from "@/components/Article";
import WordsExplorer from "@/components/WordsExplorer";
import { Callout } from "@/components/Quote";

export const metadata = {
  title: "Words and abbreviations",
  description:
    "Plain-language explanations of every difficult word and abbreviation used on this site.",
};

export default function Page() {
  return (
    <Article slug="words">
      <p>
        This list explains the hard vocabulary of the course: Latin and
        Greek book titles, humoral jargon, Jewish ritual terms, plant
        names, and date abbreviations such as AD, BC, and c.
      </p>
      <Callout title="How to use it">
        <p>
          Search, filter to abbreviations only, or jump by letter. If a
          chapter still uses a word you cannot parse, it belongs here —
          start with the search box.
        </p>
      </Callout>
      <WordsExplorer />
    </Article>
  );
}
