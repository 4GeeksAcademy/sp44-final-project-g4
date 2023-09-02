"""empty message

Revision ID: 230f776a750f
Revises: 9a7283cd7dd5
Create Date: 2023-08-30 19:10:40.829600

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '230f776a750f'
down_revision = '9a7283cd7dd5'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('groomer',
    sa.Column('id', sa.BigInteger(), nullable=False),
    sa.Column('name', sa.String(length=70), nullable=False),
    sa.Column('last_name', sa.String(length=70), nullable=False),
    sa.Column('company_name', sa.String(length=100), nullable=True),
    sa.Column('description', sa.String(length=120), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('phone_number', sa.String(length=10), nullable=False),
    sa.Column('address', sa.String(length=120), nullable=False),
    sa.Column('average_rate', sa.String(length=10), nullable=True),
    sa.Column('services', sa.String(length=100), nullable=False),
    sa.Column('price_low', sa.Integer(), nullable=False),
    sa.Column('price_high', sa.Integer(), nullable=True),
    sa.Column('call_in', sa.Boolean(), nullable=False),
    sa.Column('avatar', sa.String(length=120), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('company_name'),
    sa.UniqueConstraint('email')
    )
    op.create_table('groomerfavorites',
    sa.Column('id', sa.BigInteger(), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('groomer_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['groomer_id'], ['groomer.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('groomerreviews',
    sa.Column('id', sa.BigInteger(), nullable=False),
    sa.Column('title', sa.String(length=80), nullable=True),
    sa.Column('body', sa.String(length=200), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('rate', sa.String(length=80), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('groomer_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['groomer_id'], ['groomer.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('name', sa.String(length=100), nullable=False))
        batch_op.add_column(sa.Column('last_name', sa.String(length=100), nullable=True))
        batch_op.add_column(sa.Column('phone_number', sa.String(length=150), nullable=True))
        batch_op.add_column(sa.Column('avatar', sa.String(length=2000), nullable=True))
        batch_op.add_column(sa.Column('created_at', sa.DateTime(), nullable=True))
        batch_op.add_column(sa.Column('is_admin', sa.Boolean(), nullable=True))
        batch_op.alter_column('id',
               existing_type=sa.INTEGER(),
               type_=sa.BigInteger(),
               existing_nullable=False)
        batch_op.alter_column('email',
               existing_type=sa.VARCHAR(length=120),
               type_=sa.String(length=200),
               existing_nullable=False)
        batch_op.alter_column('password',
               existing_type=sa.VARCHAR(length=80),
               type_=sa.String(length=100),
               existing_nullable=False)
        batch_op.alter_column('is_active',
               existing_type=sa.BOOLEAN(),
               nullable=True)
        batch_op.create_unique_constraint(None, ['phone_number'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='unique')
        batch_op.alter_column('is_active',
               existing_type=sa.BOOLEAN(),
               nullable=False)
        batch_op.alter_column('password',
               existing_type=sa.String(length=100),
               type_=sa.VARCHAR(length=80),
               existing_nullable=False)
        batch_op.alter_column('email',
               existing_type=sa.String(length=200),
               type_=sa.VARCHAR(length=120),
               existing_nullable=False)
        batch_op.alter_column('id',
               existing_type=sa.BigInteger(),
               type_=sa.INTEGER(),
               existing_nullable=False)
        batch_op.drop_column('is_admin')
        batch_op.drop_column('created_at')
        batch_op.drop_column('avatar')
        batch_op.drop_column('phone_number')
        batch_op.drop_column('last_name')
        batch_op.drop_column('name')

    op.drop_table('groomerreviews')
    op.drop_table('groomerfavorites')
    op.drop_table('groomer')
    # ### end Alembic commands ###