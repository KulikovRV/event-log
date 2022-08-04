<?php

namespace App\Controller;

use App\Entity\Events;
use App\Repository\ProductRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class EventsController extends AbstractController
{
    #[Route('/api/events', name: 'events')]
    public function getEvents(ManagerRegistry $doctrine) {
        $events = $doctrine->getRepository(Events::class)->findAll();

        // TODO 
        // в данной реализации случайным образом берутся 5 записей
        // на проде нужно брать последние записи, находить их по времени создания
        $eventsKeyRandom = array_rand($events, 5);
        $eventsDataRandom = array_map(fn($key) => $events[$key], $eventsKeyRandom);
        
        $serializer = $this->container->get('serializer');
        $eventsJSON = $serializer->serialize($eventsDataRandom, 'json');

        return new response($eventsJSON);
    }
}
