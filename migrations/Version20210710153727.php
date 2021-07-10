<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210710153727 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE articles DROP FOREIGN KEY FK_BFDD31683C941476');
        $this->addSql('DROP INDEX idx_bfdd31683c941476 ON articles');
        $this->addSql('CREATE INDEX IDX_BFDD31687A2E475A ON articles (catégorie_id)');
        $this->addSql('ALTER TABLE articles ADD CONSTRAINT FK_BFDD31683C941476 FOREIGN KEY (catégorie_id) REFERENCES categorie (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE articles DROP FOREIGN KEY FK_BFDD31687A2E475A');
        $this->addSql('DROP INDEX idx_bfdd31687a2e475a ON articles');
        $this->addSql('CREATE INDEX IDX_BFDD31683C941476 ON articles (catégorie_id)');
        $this->addSql('ALTER TABLE articles ADD CONSTRAINT FK_BFDD31687A2E475A FOREIGN KEY (catégorie_id) REFERENCES categorie (id)');
    }
}
