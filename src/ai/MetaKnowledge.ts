/**
 * Minimal curated meta information for common Pokemon sets.
 */

export interface MetaSet {
  name: string
  item: string
  moves: string[]
}

const DATABASE: MetaSet[] = [
  { name: 'Garchomp', item: 'Rocky Helmet', moves: ['Earthquake', 'Dragon Claw'] },
  { name: 'Toxapex', item: 'Black Sludge', moves: ['Recover', 'Scald'] },
]

export class MetaKnowledge {
  static lookup(name: string): MetaSet | undefined {
    return DATABASE.find((m) => m.name === name)
  }
}

/* TESTS */
if (process.argv[1] && process.argv[1].endsWith('MetaKnowledge.ts')) {
  console.assert(MetaKnowledge.lookup('Garchomp')?.item === 'Rocky Helmet')
  console.log('MetaKnowledge tests passed')
}

