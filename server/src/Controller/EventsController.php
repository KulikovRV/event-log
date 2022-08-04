<?php

namespace App\Controller;

use App\Entity\Events;
use App\Repository\ProductRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class EventsController extends AbstractController
{
    #[Route('/api/events', name: 'events')]
    public function getEvents(ManagerRegistry $doctrine){
        $events = $doctrine->getRepository(Events::class)->findAll();
        $serializer = $this->container->get('serializer');
        $eventsJSON = $serializer->serialize($events, 'json');
        return new response($eventsJSON);
    }
}
