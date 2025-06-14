import { GildedRose } from '../src/gilded_rose';
import { Item } from '../src/item';
import { describe, expect, it } from '@jest/globals';

describe('Gilded Rose', () => {
  describe('Normal Item', () => {
    it('before sell date', () => {
      const gildedRose = new GildedRose();
      const items = [new Item('randomstring', 5, 10)];

      gildedRose.processEndOfDay(items);

      expect(items[0].daysRemaining).toBe(4);
      expect(items[0].quality).toBe(9);
    });

    it('with min quality', () => {
      const gildedRose = new GildedRose();
      const items = [new Item('randomstring', 5, 0)];

      gildedRose.processEndOfDay(items);

      expect(items[0].daysRemaining).toBe(4);
      expect(items[0].quality).toBe(0);
    });

    it('on sell date', () => {
      const gildedRose = new GildedRose();
      const items = [new Item('randomstring', 0, 10)];

      gildedRose.processEndOfDay(items);

      expect(items[0].daysRemaining).toBe(-1);
      expect(items[0].quality).toBe(8);
    });

    it('on sell date with min quality', () => {
      const gildedRose = new GildedRose();
      const items = [new Item('randomstring', 0, 0)];

      gildedRose.processEndOfDay(items);

      expect(items[0].daysRemaining).toBe(-1);
      expect(items[0].quality).toBe(0);
    });

    it('on sell date near min quality', () => {
      const gildedRose = new GildedRose();
      const items = [new Item('randomstring', 0, 1)];

      gildedRose.processEndOfDay(items);

      expect(items[0].daysRemaining).toBe(-1);
      expect(items[0].quality).toBe(0);
    });

    it('after sell date', () => {
      const gildedRose = new GildedRose();
      const items = [new Item('randomstring', -10, 10)];

      gildedRose.processEndOfDay(items);

      expect(items[0].daysRemaining).toBe(-11);
      expect(items[0].quality).toBe(8);
    });

    it('after sell date with min quality', () => {
      const gildedRose = new GildedRose();
      const items = [new Item('randomstring', -10, 0)];

      gildedRose.processEndOfDay(items);

      expect(items[0].daysRemaining).toBe(-11);
      expect(items[0].quality).toBe(0);
    });

    it('after sell date near min quality', () => {
      const gildedRose = new GildedRose();
      const items = [new Item('randomstring', -10, 1)];

      gildedRose.processEndOfDay(items);

      expect(items[0].daysRemaining).toBe(-11);
      expect(items[0].quality).toBe(0);
    });
  });

  describe('Aged Cheddar', () => {
    it('before sell date', () => {
      const gildedRose = new GildedRose();
      const items = [new Item('Aged Cheddar', 5, 10)];

      gildedRose.processEndOfDay(items);

      expect(items[0].daysRemaining).toBe(4);
      expect(items[0].quality).toBe(11);
    });

    it('with max quality', () => {
      const gildedRose = new GildedRose();
      const items = [new Item('Aged Cheddar', 5, 50)];

      gildedRose.processEndOfDay(items);

      expect(items[0].daysRemaining).toBe(4);
      expect(items[0].quality).toBe(50);
    });

    it('on sell date', () => {
      const gildedRose = new GildedRose();
      const items = [new Item('Aged Cheddar', 0, 10)];

      gildedRose.processEndOfDay(items);

      expect(items[0].daysRemaining).toBe(-1);
      expect(items[0].quality).toBe(12);
    });

    it('on sell date with max quality', () => {
      const gildedRose = new GildedRose();
      const items = [new Item('Aged Cheddar', 0, 50)];

      gildedRose.processEndOfDay(items);

      expect(items[0].daysRemaining).toBe(-1);
      expect(items[0].quality).toBe(50);
    });

    it('on sell date near max quality', () => {
      const gildedRose = new GildedRose();
      const items = [new Item('Aged Cheddar', 0, 49)];

      gildedRose.processEndOfDay(items);

      expect(items[0].daysRemaining).toBe(-1);
      expect(items[0].quality).toBe(50);
    });

    it('after sell date', () => {
      const gildedRose = new GildedRose();
      const items = [new Item('Aged Cheddar', -10, 10)];

      gildedRose.processEndOfDay(items);

      expect(items[0].daysRemaining).toBe(-11);
      expect(items[0].quality).toBe(12);
    });

    it('after sell date with max quality', () => {
      const gildedRose = new GildedRose();
      const items = [new Item('Aged Cheddar', -10, 50)];

      gildedRose.processEndOfDay(items);

      expect(items[0].daysRemaining).toBe(-11);
      expect(items[0].quality).toBe(50);
    });

    it('after sell date near max quality', () => {
      const gildedRose = new GildedRose();
      const items = [new Item('Aged Cheddar', -10, 49)];

      gildedRose.processEndOfDay(items);

      expect(items[0].daysRemaining).toBe(-11);
      expect(items[0].quality).toBe(50);
    });
  });

  describe('Hammer', () => {
    it('before sell date', () => {
      const gildedRose = new GildedRose();
      const items = [new Item('Hammer', 5, 40)];

      gildedRose.processEndOfDay(items);

      expect(items[0].daysRemaining).toBe(5);
      expect(items[0].quality).toBe(40);
    });

    it('on sell date', () => {
      const gildedRose = new GildedRose();
      const items = [new Item('Hammer', 0, 40)];

      gildedRose.processEndOfDay(items);

      expect(items[0].daysRemaining).toBe(0);
      expect(items[0].quality).toBe(40);
    });

    it('after sell date', () => {
      const gildedRose = new GildedRose();
      const items = [new Item('Hammer', -10, 40)];

      gildedRose.processEndOfDay(items);

      expect(items[0].daysRemaining).toBe(-10);
      expect(items[0].quality).toBe(40);
    });
  });

  describe('Concert Tickets', () => {
    it('long before sell date', () => {
      const gildedRose = new GildedRose();
      const items = [new Item('Concert Tickets', 11, 10)];

      gildedRose.processEndOfDay(items);

      expect(items[0].daysRemaining).toBe(10);
      expect(items[0].quality).toBe(11);
    });

    it('long before sell date at max quality', () => {
      const gildedRose = new GildedRose();
      const items = [new Item('Concert Tickets', 11, 50)];

      gildedRose.processEndOfDay(items);

      expect(items[0].daysRemaining).toBe(10);
      expect(items[0].quality).toBe(50);
    });

    it('medium close to sell date upper bound', () => {
      const gildedRose = new GildedRose();
      const items = [new Item('Concert Tickets', 10, 10)];

      gildedRose.processEndOfDay(items);

      expect(items[0].daysRemaining).toBe(9);
      expect(items[0].quality).toBe(12);
    });

    it('medium close to sell date upper bound at max quality', () => {
      const gildedRose = new GildedRose();
      const items = [new Item('Concert Tickets', 10, 50)];

      gildedRose.processEndOfDay(items);

      expect(items[0].daysRemaining).toBe(9);
      expect(items[0].quality).toBe(50);
    });

    it('medium close to sell date upper bound near max quality', () => {
      const gildedRose = new GildedRose();
      const items = [new Item('Concert Tickets', 10, 49)];

      gildedRose.processEndOfDay(items);

      expect(items[0].daysRemaining).toBe(9);
      expect(items[0].quality).toBe(50);
    });

    it('medium close to sell date lower bound', () => {
      const gildedRose = new GildedRose();
      const items = [new Item('Concert Tickets', 6, 10)];

      gildedRose.processEndOfDay(items);

      expect(items[0].daysRemaining).toBe(5);
      expect(items[0].quality).toBe(12);
    });

    it('medium close to sell date lower bound at max quality', () => {
      const gildedRose = new GildedRose();
      const items = [new Item('Concert Tickets', 6, 50)];

      gildedRose.processEndOfDay(items);

      expect(items[0].daysRemaining).toBe(5);
      expect(items[0].quality).toBe(50);
    });

    it('medium close to sell date lower bound near max quality', () => {
      const gildedRose = new GildedRose();
      const items = [new Item('Concert Tickets', 6, 49)];

      gildedRose.processEndOfDay(items);

      expect(items[0].daysRemaining).toBe(5);
      expect(items[0].quality).toBe(50);
    });

    it('very close to sell date upper bound', () => {
      const gildedRose = new GildedRose();
      const items = [new Item('Concert Tickets', 5, 10)];

      gildedRose.processEndOfDay(items);

      expect(items[0].daysRemaining).toBe(4);
      expect(items[0].quality).toBe(13);
    });

    it('very close to sell date upper bound at max quality', () => {
      const gildedRose = new GildedRose();
      const items = [new Item('Concert Tickets', 5, 50)];

      gildedRose.processEndOfDay(items);

      expect(items[0].daysRemaining).toBe(4);
      expect(items[0].quality).toBe(50);
    });

    it('very close to sell date upper bound near max quality', () => {
      const gildedRose = new GildedRose();
      const items = [new Item('Concert Tickets', 5, 48)];

      gildedRose.processEndOfDay(items);

      expect(items[0].daysRemaining).toBe(4);
      expect(items[0].quality).toBe(50);
    });

    it('very close to sell date lower bound', () => {
      const gildedRose = new GildedRose();
      const items = [new Item('Concert Tickets', 1, 10)];

      gildedRose.processEndOfDay(items);

      expect(items[0].daysRemaining).toBe(0);
      expect(items[0].quality).toBe(13);
    });

    it('very close to sell date lower bound at max quality', () => {
      const gildedRose = new GildedRose();
      const items = [new Item('Concert Tickets', 1, 50)];

      gildedRose.processEndOfDay(items);

      expect(items[0].daysRemaining).toBe(0);
      expect(items[0].quality).toBe(50);
    });

    it('very close to sell date lower bound near max quality', () => {
      const gildedRose = new GildedRose();
      const items = [new Item('Concert Tickets', 1, 48)];

      gildedRose.processEndOfDay(items);

      expect(items[0].daysRemaining).toBe(0);
      expect(items[0].quality).toBe(50);
    });

    it('on sell date', () => {
      const gildedRose = new GildedRose();
      const items = [new Item('Concert Tickets', 0, 10)];

      gildedRose.processEndOfDay(items);

      expect(items[0].daysRemaining).toBe(-1);
      expect(items[0].quality).toBe(0);
    });

    it('after sell date', () => {
      const gildedRose = new GildedRose();
      const items = [new Item('Concert Tickets', -10, 10)];

      gildedRose.processEndOfDay(items);

      expect(items[0].daysRemaining).toBe(-11);
      expect(items[0].quality).toBe(0);
    });
  });

  describe('Milk', () => {
    it('before sell date', () => {
       const gildedRose = new GildedRose();
       const items = [new Item('Milk', 5, 10)];

       gildedRose.processEndOfDay(items);
      expect(items[0].daysRemaining).toBe(4);
      expect(items[0].quality).toBe(8);
     });

   it('before sell date near', () => {
        const gildedRose = new GildedRose();
        const items = [new Item('Milk', 1, 12)];

        gildedRose.processEndOfDay(items);
        expect(items[0].daysRemaining).toBe(0);
        expect(items[0].quality).toBe(8);
   });

    fit('in sell date', () => {
      const gildedRose = new GildedRose();
      const items = [new Item('Milk', 0, 4)];

      gildedRose.processEndOfDay(items);
      expect(items[0].daysRemaining).toBe(-1);
      expect(items[0].quality).toBe(0);
    });

   it('after sell date quality can never be less than 0', () => {
     const gildedRose = new GildedRose();
     const items = [new Item('Milk', -2, 2)];

     gildedRose.processEndOfDay(items);
     expect(items[0].daysRemaining).toBe(-3);
     expect(items[0].quality).toBe(0);
   });
  })
});
