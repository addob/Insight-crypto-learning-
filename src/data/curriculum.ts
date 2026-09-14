import type { CourseDay } from "./types";
import { week1 } from "./days/week1";
import { week2 } from "./days/week2";
import { week3 } from "./days/week3";
import { week4 } from "./days/week4";
import { week5 } from "./days/week5";
import { week6 } from "./days/week6";
import { week7 } from "./days/week7";
import { week8 } from "./days/week8";
import { week9 } from "./days/week9";

export const courseDays: CourseDay[] = [
  ...week1,
  ...week2,
  ...week3,
  ...week4,
  ...week5,
  ...week6,
  ...week7,
  ...week8,
  ...week9,
];

const byDay = new Map(courseDays.map((d) => [d.day, d]));

export function getCourseDay(day: number): CourseDay | undefined {
  return byDay.get(day);
}

export const WEEK_TITLES: Record<number, string> = {
  1: "Foundations",
  2: "Wallets & Security",
  3: "Exchanges & Buying Crypto",
  4: "Bitcoin Deep Dive",
  5: "Ethereum & Smart Contracts",
  6: "DeFi",
  7: "NFTs & Web3",
  8: "Trading, Risk & Portfolio",
  9: "Regulation, Future & Review",
};
