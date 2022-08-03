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
    #[Route('/events', name: 'events')]
    public function getPosts(ManagerRegistry $doctrine){
        $events = $doctrine->getRepository(Events::class)->findAll();
        return new Response($events);
    }
}
