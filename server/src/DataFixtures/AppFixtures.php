<?php

namespace App\DataFixtures;

use App\Entity\Events;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        for ($i = 0; $i < 100; $i++) {
            $event = new Events();
            $event->setLevel(random_int(1, 2));
            $event->setMessage("Message number: {$i}");
            $event->setCreatedAt(new \DateTimeImmutable());
            $manager->persist($event);
        }

        $manager->flush();
    }
}
